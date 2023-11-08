const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Club = require("./models/clubList");
const Match = require("./models/matchesList");
const User = require("./models/user");
const userRoutes = require("../server/routes/user");
const requireAuth = require("../server/middleware/requireAuth");

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);
app.use(requireAuth);
// ---------------
const catchAsync = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/use-score");
  console.log("MONGO CONNECTION OPEN");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/clubList", async (req, res) => {
  const user_id = req.user._id;
  await Club.find({ user_id })
    .then((clubs) => res.json(clubs))
    .catch((err) => res.json(err));
});

app.get("/clubList/:id", async (req, res) => {
  const { id } = req.params;
  await Club.findById(id)
    .then((club) => res.json(club))
    .catch((err) => res.json(err));
});

app.post("/clubList", async (req, res) => {
  const user_id = req.user._id;
  const { team_badge, team_key, team_name } = req.body;
  const newClub = new Club({
    team_name: team_name,
    team_key: team_key,
    team_badge: team_badge,
    user_id: user_id,
  });
  await newClub.save();
});

app.delete("/clubList/:id", async (req, res) => {
  const { id } = req.params;
  await Club.findByIdAndDelete(id)
    .then((club) => res.json(club))
    .catch((err) => res.json(err));
});
//----------------------------------------
// Favourite matches:

app.get("/matchesList", async (req, res) => {
  const user_id = req.user._id;
  await Match.find({ user_id })
    .then((clubs) => res.json(clubs))
    .catch((err) => res.json(err));
});

app.post("/matchesList", async (req, res) => {
  const user_id = req.user._id;
  const {
    team_home_badge,
    team_away_badge,
    match_hometeam_score,
    match_awayteam_score,
    match_date,
    match_time,
    match_id,
  } = req.body;
  const newMatch = new Match({
    team_home_badge: team_home_badge,
    team_away_badge: team_away_badge,
    match_hometeam_score: match_hometeam_score,
    match_awayteam_score: match_awayteam_score,
    match_date: match_date,
    match_time: match_time,
    match_id: match_id,
    user_id: user_id,
  });
  await newMatch.save();
});

app.delete("/matchesList/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Match.findByIdAndDelete(id)
    .then((club) => res.json(club))
    .catch((err) => res.json(err));
});

// ---------------------------
app.listen(4000, () => {
  console.log(`Listening on port 4000`);
});