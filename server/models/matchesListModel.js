const mongoose = require("mongoose");
const { Schema } = mongoose;

const matchesListSchema = new Schema({
  team_home_badge: String,
  team_away_badge: String,
  match_hometeam_score: String,
  match_awayteam_score: String,
  match_date: String,
  match_time: String,
  match_id: String,
});

const Match = mongoose.model("Match", matchesListSchema);

module.exports = Match;
