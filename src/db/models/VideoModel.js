import { Sequelize, DataTypes } from "sequelize";
import sql from "../connection.js";
import User from "./User.js";

const Video = sql.define(
  "Video",
  {
    video_Id: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "dk_" + new Date().getTime(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    like: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 0,
    },
    dislike: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 0,
    },
    share: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 0,
    },
  },
  { timestamps: true, deletedAt: "destroyTime" }
);

User.hasMany(Video, { foreignKey: "user_Id" });
Video.belongsTo(User, { foreignKey: "user_Id" });
export default Video;
