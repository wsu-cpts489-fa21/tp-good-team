import { Post } from "../models/Post.js";
import express from "express";
const postRoute = express.Router();

postRoute.get("/posts/:postId", async (req, res, next) => {
  console.log(
    "In /posts route (GET) with postId = " + JSON.stringify(req.params.postId)
  );

  try {
    const PostCursor = await Post.findOne({ _id: req.params.postId });

    const prev = await Post.find({
      _id: { $lt: PostCursor._id },
    }).sort({ _id: -1 });
    // .limit(1);

    res.status(200).json(prev);
    // res.status(200).json(prev[0]); //Only passes first obj
  } catch {
    console.log("XX Catch Block");
  }
});

export default postRoute;
