const express = require("express");
const { getClubs, getClub } = require("../controllers/clubController");
const router = express.Router();

router.get("/", getClubs);
router.get("/:id", getClub);

module.exports = router;
