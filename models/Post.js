import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  userData: {
    firstName: { type: String, required: true },
    userName: { type: String, required: true },
  },
  roundData: {
    sgs: { type: String },
    strokes: { type: String, required: true, min: 1, max: 300 },
    minutes: { type: String, required: true, min: 1, max: 240 },
    seconds: { type: String, required: true, min: 0, max: 60 },
    isPrivate: { type: Boolean },
  },
  postData: {
    date: {
      type: Date,
      default: Date.now() - new Date().getTimezoneOffset() * 60000,
    },
    fistBumpCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
    comment: { type: String },
    postType: { type: String }, //post, round, error
  },
  //   comments: [CommentSchema],
});

const Post = mongoose.model("Post", PostSchema);
export { PostSchema, Post };

/*****************************************************************


To check if the post belongs to a BUDDY
    Update User Schema, CreateAccount, ... to include a hard-coded array of userIds
    On client-side, For each B in Buddy array
        If Post.userId matches a buddy then we have a match
    

When user submits Post button
    Save to DB

 *****************************************************************/
