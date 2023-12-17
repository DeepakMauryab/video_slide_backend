import { Router } from "express";
import Video from "../db/models/VideoModel.js";
import upload from "../middleware/multer.js";
import routeConstant from "../constants/routeName.js";
import User from "../db/models/User.js";

Video.sync({ force: false });
User.sync({ force: false });
const router = Router();

// videos
// crud
// router.post("/api/videos", upload, routeConstant.uploadVideo);
// router.delete("/api/videos/:id", routeConstant.deleteVideo);
// router.get("/api/videos", routeConstant.getAllVideos);
// router.get("/api/videos/:id", routeConstant.getVideoById);
// router.put("/api/videos/:id", upload, routeConstant.updateVideo);
// router.get("/api/videos/byChannel/:channelid", routeConstant.getVideoByChannel);

// // Operations
// router.get('/api/like/:id', routeConstant.likeVideo);

// // user section
router.route("/").get(routeConstant.getUsers);
router.route("/").post(routeConstant.createUser);
router.route("/update:id").put(routeConstant.updateUser);
router.route("/:id").delete(routeConstant.deleteUser);
router.route("/login").post(routeConstant.loginUser);
export default router;
