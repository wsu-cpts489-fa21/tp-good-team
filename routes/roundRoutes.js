//////////////////////////////////////////////////////////////////////////
//ROUTES FOR PERFORMING CRUD OPERATIONS ON ROUND DOCUMENTS
//////////////////////////////////////////////////////////////////////////

import User from "../models/User.js";
import { Round } from "../models/Round.js";
import express from "express";
const roundRoute = express.Router();

//CREATE round route: Adds a new round as a subdocument to
//a document in the users collection (POST)
roundRoute.post("/rounds/:userId", async (req, res, next) => {
  console.log(
    "in /rounds (POST) route with params = " +
      JSON.stringify(req.params) +
      " and body = " +
      JSON.stringify(req.body)
  );
  if (
    !req.body.hasOwnProperty("date") ||
    !req.body.hasOwnProperty("course") ||
    !req.body.hasOwnProperty("type") ||
    !req.body.hasOwnProperty("holes") ||
    !req.body.hasOwnProperty("strokes") ||
    !req.body.hasOwnProperty("minutes") ||
    !req.body.hasOwnProperty("seconds") ||
    !req.body.hasOwnProperty("notes")
  ) {
    //Body does not contain correct properties
    return res
      .status(400)
      .send(
        "POST request on /rounds formulated incorrectly." +
          "Body must contain all 8 required fields: date, course, type, holes, strokes, " +
          "minutes, seconds, notes."
      );
  }
  try {
    const round = new Round(req.body);
    const error = round.validateSync();
    if (error) {
      //Schema validation error occurred
      return res
        .status(400)
        .send("Round not added to database. " + error.message);
    }
    const status = await User.updateOne(
      { "accountData.id": req.params.userId },
      { $push: { rounds: req.body } }
    );
    if (status.modifiedCount != 1) {
      return res
        .status(400)
        .send(
          "Round not added to database. " +
            "User '" +
            req.params.userId +
            "' does not exist."
        );
    } else {
      return res.status(201).send("Round successfully added to database.");
    }
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send(
        "Round not added to database. " + "Unexpected error occurred: " + err
      );
  }
});

//READ round route: Returns all rounds associated with a given user in
//the users collection (GET)
roundRoute.get("/rounds/:userId", async (req, res) => {
  console.log(
    "in /rounds route (GET) with userId = " + JSON.stringify(req.params.userId)
  );
  try {
    let thisUser = await User.findOne({ "accountData.id": req.params.userId });
    if (!thisUser) {
      return res
        .status(400)
        .send(
          "No user account with specified userId " + "was found in database."
        );
    } else {
      return res.status(200).json(JSON.stringify(thisUser.rounds));
    }
  } catch (err) {
    console.log();
    return res
      .status(400)
      .send(
        "Unexpected error occurred when looking " +
          "up user in database: " +
          err
      );
  }
});

//UPDATE round route: Updates a specific round for a given user
//in the users collection (PUT)
//TO DO: Implement this route
roundRoute.put("/rounds/:userId/:roundId", async (req, res) => {
  console.log(
    "in /rounds route (PUT) with id = " + JSON.stringify(req.params.roundId)
  );
  if (
    !req.body.hasOwnProperty("date") ||
    !req.body.hasOwnProperty("course") ||
    !req.body.hasOwnProperty("type") ||
    !req.body.hasOwnProperty("holes") ||
    !req.body.hasOwnProperty("strokes") ||
    !req.body.hasOwnProperty("minutes") ||
    !req.body.hasOwnProperty("seconds") ||
    !req.body.hasOwnProperty("notes")
  ) {
    //Body does not contain correct properties
    return res
      .status(400)
      .send(
        "PUT request on round with id" +
          req.params.roundId +
          "formulated incorrectly." +
          "Body must contain all 8 required fields: date, course, type, holes, strokes, " +
          "minutes, seconds, notes."
      );
  }
  try {
    const status = await User.updateOne(
      {
        "accountData.id": req.params.userId,
        rounds: { $elemMatch: { _id: req.params.roundId } },
      },
      { $set: { "rounds.$": req.body } }
    );
    if (status.modifiedCount != 1) {
      console.log("status: " + JSON.stringify(status));
      res.status(404).send("Round not updated.");
    } else {
      res
        .status(200)
        .send("Round with id " + req.params.roundId + " successfully updated.");
    }
  } catch (err) {
    res
      .status(400)
      .send(
        "Unexpected error occurred when updating round in database: " + err
      );
  }
});
//DELETE round route: Deletes a specific round for a given user
//in the users collection (DELETE)
//TO DO: Implement this route
roundRoute.delete("/rounds/:userId/:roundId", async (req, res) => {
  console.log(
    "in /rounds route (DELETE) with id = " + JSON.stringify(req.params.roundId)
  );

  try {
    const status = await User.updateOne(
      { $pull: { rounds: { _id: req.params.roundId } } }
    );
    if (status.modifiedCount != 1) {
      console.log("status: " + JSON.stringify(status));
      res.status(404).send("Round not delete.");
    } else {
      res
        .status(200)
        .send("Round with id " + req.params.roundId + " successfully deleted.");
    }
  } catch (err) {
    res
      .status(400)
      .send(
        "Unexpected error occurred when deleting round in database: " + err
      );
  }
});

export default roundRoute;
