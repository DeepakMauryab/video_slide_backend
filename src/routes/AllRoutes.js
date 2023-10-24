import User from "../db/models/User.js";
import Video from "../db/models/VideoModel.js";

export const uploadVideo = async (req, res) => {
  try {
    console.log(req.file);
    const video = await Video.create({ ...req.body, video: req.file.filename });
    if (video) {
      res.status(201).json({ message: "Data Added", success: true });
    } else {
      res.status(406).json({ warning: "Data not Added", success: false });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error, success: false });
  }
};
export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.destroy({
      where: { id: req.params.id },
    });
    if (video) {
      res.status(201).json({ message: "Video Removed" });
    } else {
      res.status(406).json({ warning: "Video not Added" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error });
  }
};
export const getAllVideos = async (req, res) => {
  try {
    const video = await Video.findAll();
    if (video) {
      res.status(200).json(video);
    } else {
      res.status(406).json({ warning: "Videos not Found" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error });
  }
};
export const getVideoByChannel = async (req, res) => {
  console.log(req.params.channelid);
  try {
    const video = await Video.findAll({
      where: { user_Id: req.params.channelid },
      include: [
        {
          model: User,
          where: { id: req.params.channelid },
        },
      ],
    });
    if (video?.length > 0) {
      res.status(200).json(video);
    } else if (video?.length <= 0) {
      res.status(200).json({ message: "Data Not Found" });
    } else {
      res.status(406).json({ warning: "Videos not Found" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error });
  }
};
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findOne({
      where: { id: req.params.id },
    });
    if (video) {
      res.status(200).json(video);
    } else {
      res.status(406).json({ warning: "Videos not Found" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const video = await Video.update(
      { ...req.body, video: req.file.filename },
      {
        where: { id: req.params.id },
      }
    );
    if (video) {
      res.status(201).json({ message: "Video updated" });
    } else {
      res.status(406).json({ warning: "Video not updated" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error });
  }
};

// user section
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    if (user) {
      res.status(201).json({ message: "Data Added" });
    } else {
      res.status(406).json({ warning: "Data not Added" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error });
  }
};
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
    res.status(422).json({ error: "Some Error " + error });
  }
};
export const getUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    if (user) {
      res.status(201).send(user);
    } else {
      res.status(406).json({ warning: "Data not Updated" });
    }
  } catch (error) {
    res.status(422).json({ error: "Some Error " + error });
  }
};
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
    res.status(422).json({ error: "Some Error " + error });
  }
};
