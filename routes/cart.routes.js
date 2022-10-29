module.exports = (app) => {
    const carts = require("../controllers/cart.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", carts.create);
  
    router.put("/:id", carts.update);
  
    router.delete("/:id", carts.delete);
  
    router.get("/", carts.findAll);
  
    router.get("/:id", carts.findOne);

    router.get("/user/:userId", carts.findAllByUserId);

    router.get("/user/:userId/total", carts.getTotalByUserId);

    router.get("/user/:userId/:productId", carts.findOneByUserIdAndProductId);
  
    app.use("/api/carts", router);
  }