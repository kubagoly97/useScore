const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const Club = require("./models/clubListModel");
const Match = require("./models/matchesListModel");
// const clubList = require("../server/routes/clubList");

app.use(cors());
app.use(express.json());

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
  await Club.find()
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
  const { team_badge, team_key, team_name } = req.body;
  const newClub = new Club({
    team_name: team_name,
    team_key: team_key,
    team_badge: team_badge,
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
  await Match.find()
    .then((clubs) => res.json(clubs))
    .catch((err) => res.json(err));
});

app.post("/matchesList", async (req, res) => {
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
// users

app.get("/register", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

app.post(
  "/register",
  catchAsync(async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = new User({ email, username, password });
      await user.save();
      res.status(200).json({ status: "ok" });
    } catch (e) {
      res.status(400).json({ status: "error", error: e.message });
    }
  })
);

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/username", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    return res.json({ status: "ok", username: user.username });
  } catch (e) {
    console.log(e);
    res.json({ status: "error", error: "invalid token" });
  }
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
