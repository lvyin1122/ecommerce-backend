const models = require("../models");
const User = models.users;
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "The request is empty.",
    });
    return;
  }

  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error",
      });
    });
};

exports.login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "The request is empty.",
    });
    return;
  }

  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  User.findOne({ where: { email: user.email } })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: "User Not found." });
      }
      if (data.password == user.password) {
        var token = jwt.sign({ id: data.id }, config.SECRET, {
          expiresIn: 86400, // expires in 24 hours
        });
        res.status(200).send({
          token: token,
          username: data.username,
          userId: data.id,
          message: "User was logged in successfully!",
        });
      } else {
        res.status(401).send({ message: "Invalid Password!" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error",
      });
    });
};

exports.logout = (req, res) => {
  res.status(200).send({ auth: false, token: null });
};
