const verifyToken = require("../middlewares/verifyToken.js");

module.exports = (app) => {
    const carts = require("../controllers/cart.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", carts.create);
  
    router.put("/:id", carts.update);
  
    router.delete("/:id", carts.delete);
  
    router.get("/", verifyToken, carts.findAll);

    router.get("/user/:userId", carts.findAllByUserId);

    router.get("/user/:userId/:productId", carts.findOneByUserIdAndProductId);

    router.post("/checkout/:userId", carts.checkout);
  
    app.use("/api/carts", router);

  }