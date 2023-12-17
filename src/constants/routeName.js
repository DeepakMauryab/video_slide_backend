import {
  uploadVideo,
  deleteVideo,
  getAllVideos,
  updateVideo,
  getVideoById,
  getVideoByChannel,
  likeVideo
} from "../controllers/videoCotrollers.js";
import {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
  loginUser
} from "../controllers/userControllers.js";

const routeConstant = {
  uploadVideo,
  deleteVideo,
  getAllVideos,
  updateVideo,
  getVideoById,
  getVideoByChannel,
  createUser,
  updateUser,
  getUsers,
  deleteUser,
  likeVideo,
  loginUser
};

export default routeConstant;
