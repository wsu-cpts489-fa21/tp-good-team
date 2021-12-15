import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  postData: {
    firstName: { type: String, required: true },
    fistBumpCount: { type: Number, default: 0 },
    commentCount: { type: Number, default: 0 },
  },
  roundData: {
    date: { type: Date, default: Date.now },
    sgs: { type: String },
    strokes: { type: String, required: true, min: 1, max: 300 },
    minutes: { type: String, required: true, min: 1, max: 240 },
    seconds: { type: String, required: true, min: 0, max: 60 },
  },
  //   comments: [CommentSchema],
});

const Post = mongoose.model("Post", PostSchema);
export { PostSchema, Post };

/*****************************************************************
 When user clicks Feed Mode
    Populate Posts

To Populate Posts
    Get the HEAD post (id=9999999999999)
    For MAX-POST async calls
        Get the first Post who's _id is numerically before currentPostId (999.. in this case) (Most recent post)
        If that post belongs to a BUDDY
            Add it to the list of posts to render
            Decrement index
        Else Skip
        Either way
            Set the next async call to be the _id of the current Post


To get the HEAD post
    Just pass in _id = 9999999999999

To get the first Post who's _id is numerically before the currentPostId
    See postRoutes.js ----> get() method

To check if the post belongs to a BUDDY
    Update User Schema, CreateAccount, ... to include a hard-coded array of userIds
    On client-side, For each B in Buddy array
        If Post.userId matches a buddy then we have a match
    
To add to the list of posts to render
    In App.js, Create an empty array of Posts

 *****************************************************************/
