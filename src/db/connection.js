import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const host = process.env.DATABASE_HOST;
const name = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const db = process.env.DATABASE_NAME;
const dialect = "mysql";

const sql = new Sequelize(db, name, password, {
  host,
  dialect,
  logging: false,
});

(async function () {
  try {
    await sql.authenticate();
    console.log("Connection successfull");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sql;
