import { DataTypes } from "sequelize";
import sql from "../connection.js";
import Video from "./VideoModel.js";

const Likes = sql.define(
    "Likes",
    {
        videoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { timestamps: true, deletedAt: "destroyTime" }
);


Video.hasMany(Likes, { foreignKey: "user_Id" });
Likes.belongsTo(Video, { foreignKey: "videoId" });
Likes.belongsTo(Video, { foreignKey: "userId" });
export default Likes;
