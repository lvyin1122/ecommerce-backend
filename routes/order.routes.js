module.exports = (app) => {
  const orders = require("../controllers/order.controller.js");

  var router = require("express").Router();

  router.post("/", orders.create);

  router.put("/:id", orders.update);

  router.delete("/:id", orders.delete);

  router.get("/", orders.findAll);

  router.get("/:id", orders.findOne);

  router.get("/user/:userId", orders.findAllByUserId);

  app.use("/api/orders", router);
}