const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

app.use(cors());
app.use(express.json());

const { Schema } = mongoose;

const clubListSchema = new Schema({
  team_name: String,
  team_badge: String,
  team_key: String,
});
const Club = mongoose.model("Club", clubListSchema);
const matchesListSchema = new Schema({});
const Match = mongoose.model("Match", matchesListSchema);
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

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
