module.exports = (app) => {
    const payment = require("../controllers/payment.controller.js");

    var router = require("express").Router();

    router.post("/", payment.create);

    app.use("/api/payment", router);
}