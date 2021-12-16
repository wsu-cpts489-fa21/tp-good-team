import { Mongoose } from "mongoose";

const FeedSchema = new Mongoose.Schema({
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
  posts: [FeedSchema],
});

const Feed = mongoose.model("Feed", FeedSchema);
export { FeedSchema, Feed };
