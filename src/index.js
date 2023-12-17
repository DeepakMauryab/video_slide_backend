import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
import "./db/connection.js";
import app from "./app.js";

app.listen(PORT, () => {
  console.log("connected at ", PORT);
});
