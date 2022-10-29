module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  router.post("/", users.create);

  router.put("/:id", users.update);

  router.delete("/:id", users.delete);

  router.get("/", users.findAll);

  router.get("/:id", users.findOne);

  router.get("/username/:username", users.findOneByUsername);

  app.use("/api/users", router);
};
