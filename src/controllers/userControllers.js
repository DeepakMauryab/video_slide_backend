import User from "../db/models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import JWTsign from "../middleware/jwtSign.js";
import ApiResponse from "../utils/ApiResponse.js";
// user section

export const createUser = asyncHandler(async (req, res) => {
  if (!req.body.mobile || !req.body.password) {
    return ApiError(res, 400, "mobile and password required");
  }
  let existedUser = await User.findOne({
    where: {
      mobile: req.body.mobile,
    },
  });
  if (existedUser) {
    return ApiError(res, 409, "user with mobile number already exist");
  }
  req.body.password = await bcrypt.hash(req.body.password, 12);
  const user = await User.create(req.body);
  const token = JWTsign({ name: user.name, id: user.id });
  const finalUser = await User.update(
    { token },
    {
      where: { id: user.id },
    }
  );
  if (finalUser || user) {
    delete user.dataValues.password;
    return ApiResponse(res, 201, "user created successfull", {
      ...user.dataValues,
      token,
    });
  } else {
    return ApiError(res, 406, "user not created");
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  if (!req.body.mobile || !req.body.password) {
    return ApiError(res, 400, "mobile and password required");
  }
  const password = String(req.body.password);
  let user = await User.findOne({
    where: {
      mobile: req.body.mobile,
    },
  });
  if (user?.dataValues) {
    const passwordCheck = await bcrypt.compare(
      password,
      user?.dataValues?.password
    );
    console.log(passwordCheck);
    if (passwordCheck) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      await User.update(
        { token },
        {
          where: { id: user?.dataValues?.id },
        }
      );
      delete user.dataValues.password;
      return ApiResponse(res, 200, "successfull login", {
        ...user.dataValues,
        token,
      });
    } else {
      return ApiError(res, 406, "Incorrect Paasword");
    }
  } else {
    return ApiError(res, 404, "user not found");
  }
});
export const updateUser = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (user) {
      res.status(201).json({ message: "Data Updated" });
    } else {
      res.status(406).json({ warning: "Data not Updated" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error, status: false });
  }
};
export const getUsers = asyncHandler(async (req, res) => {
  const user = await User.findAll();
  if (user) {
    return ApiResponse(res, 200, user, "Users Fetched Successfully");
  } else {
    return ApiError(res, 404, "data not Found");
  }
});

export const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: { id: req.params.id },
    });
    if (user) {
      res.status(201).json({ message: "User Removed" });
    } else {
      res.status(406).json({ warning: "User not Added" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error, status: false });
  }
};
