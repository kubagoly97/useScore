const Club = require("../models/clubList");
const mongoose = require("mongoose");

const getClubs = async (req, res) => {
  await Club.find()
    .then((clubs) => res.json(clubs))
    .catch((err) => res.json(err));
};

const getClub = async (req, res) => {
  const { id } = req.params;
  await Club.findById(id)
    .then((club) => res.json(club))
    .catch((err) => res.json(err));
};
