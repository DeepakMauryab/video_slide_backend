import { Sequelize } from "sequelize";

const host = "localhost";
const name = "root";
const password = "";
const db = "videoslide";
const dialect = "mysql";

const sql = new Sequelize(db, name, password, {
  host,
  dialect,
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
