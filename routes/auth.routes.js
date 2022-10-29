module.exports = (app) => {
    const auth = require("../controllers/auth.controller.js");
  
    var router = require("express").Router();
  
    router.post("/register", auth.register);
  
    router.post("/login", auth.login);

    router.post("/logout", auth.logout);

    router.post("/refresh", auth.refresh);
  
    app.use("/api/auth", router);
}