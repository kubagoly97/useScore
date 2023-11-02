const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubListSchema = new Schema({
  team_name: String,
  team_badge: String,
  team_key: String,
});
const Club = mongoose.model("Club", clubListSchema);

module.exports = Club;
