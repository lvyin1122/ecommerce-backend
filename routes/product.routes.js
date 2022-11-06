module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  router.post("/", products.create);

  router.post("/bulk", products.bulkCreate);

  router.put("/:id", products.update);

  router.delete("/:id", products.delete);

  router.get("/", products.findAll);

  router.get("/:id", products.findOne);

  app.use("/api/products", router);

};
