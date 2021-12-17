import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    username: {type: String},
    comment: {type: String}
});

const Comment = mongoose.model("Comment", CommentSchema);
export { CommentSchema, Comment };