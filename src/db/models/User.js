import { Sequelize, DataTypes } from "sequelize";
import sql from "../connection.js";

const User = sql.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    channelHandle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["M", "F", "O"],
      allowNull: null,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: null,
    },
  },
  { timestamps: true, deletedAt: "destroyTime" }
);

export default User;
