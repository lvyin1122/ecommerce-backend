module.exports = (app) => {
    const payment = require("../controllers/payment.controller.js");
    const verifyToken = require("../middlewares/verifyToken.js");

    var router = require("express").Router();

    router.post("/", verifyToken, payment.create);

    app.use("/api/payment", router);
}