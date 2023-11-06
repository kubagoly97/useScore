const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubListSchema = new Schema({
  team_name: { type: String, required: true },
  team_badge: String,
  team_key: { type: String, required: true },
  user_id: { type: String, rquired: true },
});
const Club = mongoose.model("Club", clubListSchema);

module.exports = Club;
