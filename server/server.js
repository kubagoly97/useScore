if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Club = require("./models/clubList");
const Match = require("./models/matchesList");
const userRoutes = require("./routes/user");
const requireAuth = require("./middleware/requireAuth");
const port = process.env.PORT || 4000;
const uri = process.env.DB_URL || "mongodb://127.0.0.1:27017/use-score";

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);
app.use(express.urlencoded({ extended: true }));

app.use(requireAuth);

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.log(error));
  console.log("MONGO CONNECTION OPEN");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// ---------------

app.get("/", (req, res) => {
  res.json("Hello World!");
});

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
  await Match.findByIdAndDelete(id)
    .then((club) => res.json(club))
    .catch((err) => res.json(err));
});

// ---------------------------

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
