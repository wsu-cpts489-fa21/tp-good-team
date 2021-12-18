/* FeedMode: The enumerated type for FeedMode. */

const FeedMode = {
  FEEDTABLE: "TableMode",
  FEEDCOMMENT: "CommentMode",
  FEEDPOST: "PostMode",
};

Object.freeze(FeedMode); //This ensures that the object is immutable.

export default FeedMode;
