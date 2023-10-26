const mongoose = require("mongoose");
const { Schema } = mongoose;

const clubListSchema = new Schema({
  club: Array,
});

const ClubList = mongoose.model("ClubList", clubListSchema);

module.exports = ClubList;
