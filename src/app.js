import express from "express";
import cors from "cors";
const app = express();
import userRouter from "./routes/user.routes.js";
import ApiError from "./utils/ApiError.js";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("uploads"));

// routes
app.use("/api/user", userRouter);

app.use((req, res, next) => {
  next(res.json({ error: "Invalid Route" }));
});

export default app;
