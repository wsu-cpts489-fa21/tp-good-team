/* FeedMode: The enumerated type for FeedMode. */

const FeedMode = {
  TABLE: "TableMode",
  COMMENT: "CommentMode",
  POST: "PostMode",
};

Object.freeze(FeedMode); //This ensures that the object is immutable.

export default FeedMode;
