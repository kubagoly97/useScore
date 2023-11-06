const express = require("express");
const { signUpUser, loginUser } = require("../controllers/userController");
const router = express.Router();

// login
router.post("/login", loginUser);

// signup
router.post("/signup", signUpUser);

module.exports = router;
