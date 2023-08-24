import { Router } from "express";
import Video from "../db/models/VideoModel.js";
import upload from "../db/multer/multer.js";
import routeConstant from "../constants/routeName.js";
import User from "../db/models/User.js";

Video.sync({ force: false });
User.sync({ force: false });
const router = Router();
router.get("/", (req, res) => {
  res.send("Hello From server");
});

// videos crud
router.post("/api/videos", upload, routeConstant.uploadVideo);
router.delete("/api/videos/:id", routeConstant.deleteVideo);
router.get("/api/videos", routeConstant.getAllVideos);
router.get("/api/videos/:id", routeConstant.getVideoById);
router.put("/api/videos/:id", upload, routeConstant.updateVideo);
router.get("/api/videos/byChannel/:channelid", routeConstant.getVideoByChannel);

// user section
router.post("/api/user", routeConstant.createUser);
router.put("/api/user/:id", routeConstant.updateUser);
router.get("/api/user/", routeConstant.getUsers);
router.delete("/api/user/:id", routeConstant.deleteUser);

router.get("/*/*", (req, res) => {
  res.status(404).json({ error: "Invalide Route" });
});
export default router;
