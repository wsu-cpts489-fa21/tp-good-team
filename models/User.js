import mongoose from "mongoose";
import { RoundSchema } from "./Round.js";

const UserSchema = new mongoose.Schema({
  accountData: {
    id: String,
    password: String,
    securityQuestion: String,
    securityAnswer: String,
  },
  identityData: {
    displayName: String,
    profilePic: String,
  },
  speedgolfData: {
    bio: String,
    homeCourse: String,
    firstRound: Date,
    personalBest: {
      strokes: Number,
      minutes: Number,
      seconds: Number,
      course: String,
    },
    clubs: {
      driver: String,
      threeW: String,
      fourW: String,
      fiveW: String,
      hybrid: String,
      oneI: String,
      twoI: String,
      threeI: String,
      fourI: String,
      fiveI: String,
      sixI: String,
      sevenI: String,
      eightI: String,
      nineI: String,
      pw: String,
      gw: String,
      sw: String,
      lw: String,
      putter: String,
    },
    clubComments: String,
  },
  rounds: [RoundSchema],
});

const User = mongoose.model("User", UserSchema);
export default User;
