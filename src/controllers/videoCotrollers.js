import Video from "../db/models/VideoModel.js";


export const uploadVideo = async (req, res) => {
    try {
        const video = await Video.create({ ...req.body, video: req.file.filename });
        if (video) {
            res.status(201).json({ message: "Data Added", success: true });
        } else {
            res.status(406).json({ warning: "Data not Added", success: false });
        }
    } catch (error) {
        res.status(422).json({ error: "Some Error " + error, success: false });
    }
};
export const deleteVideo = async (req, res) => {
    try {
        const video = await Video.destroy({
            where: { id: req.params.id },
        });
        if (video) {
            res.status(201).json({ message: "Video Removed", status: true });
        } else {
            res.status(406).json({ warning: "Video not Removed", status: false });
        }
    } catch (error) {
        res.status(422).json({ error: "Some Error " + error, status: false });
    }
};
export const getAllVideos = async (req, res) => {
    try {
        const range = req.query.from && req.query.to ? { offset: Number(req.query.from), limit: Number(req.query.to), } : req.query.from ? { offset: Number(req.query.from) } : req.query.to ? { offset: Number(req.query.to) } : {};

        const video = await Video.findAll(range);
        if (video) {
            res.status(200).json({ data: video, status: true });
        } else {
            res.status(406).json({ data: "Videos not Found", status: true });
        }
    } catch (error) {
        res.status(422).json({ error: "Some Error " + error, status: false });
    }
};
export const getVideoByChannel = async (req, res) => {
    console.log(req.params.channelid);
    try {
        const video = await Video.findAll({
            where: { user_Id: req.params.channelid },
            include: [
                {
                    model: User,
                    where: { id: req.params.channelid },
                },
            ],
        });
        if (video?.length > 0) {
            res.status(200).json({ data: video, status: true });
        } else if (video?.length <= 0) {
            res.status(200).json({ message: "Data Not Found" });
        } else {
            res.status(406).json({ warning: "Videos not Found" });
        }
    } catch (error) {
        res.status(422).json({ error: "Some Error " + error, status: false });
    }
};
export const getVideoById = async (req, res) => {
    try {
        const video = await Video.findOne({
            where: { id: req.params.id },
        });
        if (video) {
            res.status(200).json({ data: video, status: true });
        } else {
            res.status(406).json({ data: "Videos not Found", status: false });
        }
    } catch (error) {
        res.status(422).json({ error: "Some Error " + error, status: false });
    }
};

export const updateVideo = async (req, res) => {
    try {
        const video = await Video.update(
            { ...req.body, video: req.file.filename },
            {
                where: { id: req.params.id },
            }
        );
        if (video) {
            res.status(201).json({ message: "Video updated", status: true });
        } else {
            res.status(406).json({ warning: "Video not updated", status: false });
        }
    } catch (error) {
        res.status(422).json({ error: "Some Error " + error, status: false });
    }
};


export const likeVideo = async (req, res) => {
    try {
        // const video = await Video.update(
        //     { like: },
        //     {
        //         where: { id: req.params.id },
        //     }
        // );
        // if (video) {
        //     res.status(201).json({ message: "Video updated", status: true });
        // } else {
        //     res.status(406).json({ warning: "Video not updated", status: false });
        // }
    } catch (error) {
        res.status(422).json({ error: "Some Error " + error, status: false });
    }
}