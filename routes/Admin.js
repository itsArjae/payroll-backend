const express = require("express");
const router = express.Router();
const { Admin } = require("../models");

router.post("/create", async (req, res, next) => {
  const data = req.body;

  const foundAdmin = await Admin.findOne({
    where: {
      username: data.username,
    },
  });

  if (foundAdmin) {
    res.json({ error: "This Username Already Exist" });
    return;
  }

  await Admin.create(data);
  res.json(data);
});

router.post("/login", async (req, res, next) => {
  const data = req.body;
  const {username,password} = data;
  const foundUser = await Admin.findOne({
    where: {
      username: username,
      password: password,
    },
  });

  if (!foundUser) {
    res.json({ error: "Wrong Username or Password" ,username});
    return;
  }

  res.json(data);
});

module.exports = router;
