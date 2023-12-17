import JWT from "jsonwebtoken";

var JWTSign = function (user) {
  return JWT.sign(user, process.env.JWT_SECRET);
};

export default JWTSign;
