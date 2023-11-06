const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password, username) {
  if (!email || !password) throw Error("all fields must be filled");
  if (!validator.isEmail(email)) throw Error("Email is not valid");
  if (!validator.isStrongPassword(password, { minLength: 8 }))
    throw Error("Password is not strong enough");

  const emailExists = await this.findOne({ email });
  if (emailExists) throw Error("Email already in use");

  const hash = await bcrypt.hash(password, 12);
  const user = await this.create({ email, password: hash });
  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("all fields must be filled");

  const user = await this.findOne({ email });
  if (!user) throw Error("Incorrect email or password");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error("incorrect email or password");

  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
