const express = require("express");
const router = express.Router();
const User = require("../models/SignUpModels");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const { password } = req.body;
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(password, saltPassword);

  const signedUpUser = new User({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    password: securePassword,
  });

  console.log("signup", signedUpUser);

  /*
  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }
  if (!password || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }
  if (password.length < 5) {
    return res.json({
      status: "error",
      error: "Password is tot short. Should be at least 6 characters",
    });
  } */
  signedUpUser.save().then((data) => {
    res.send(data);
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.json({ status: "error", error: "Invalid password/username" });
  }
  if (await bcrypt.compare(password, user.password)) {
    return res.send({ status: "ok", data: user });
  }
});

module.exports = router;
