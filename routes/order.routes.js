const express = require("express");
const router = express.Router();

const orders = require("../controllers/order.controller.js");

router.post("/", orders.create);

router.put("/:id", orders.update);

router.delete("/:id", orders.delete);

router.get("/", orders.findAll);

router.get("/:id", orders.findOne);

router.get("/user/:userId", orders.findAllByUserId);

module.exports = router;