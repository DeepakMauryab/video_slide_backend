import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 5000;

import route from "./routes/route.js";

app.use(express.static("uploads"));

// connection require
import "./db/connection.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router use
app.use(route);

app.listen(PORT, () => {
  console.log("connected at ", PORT);
});
