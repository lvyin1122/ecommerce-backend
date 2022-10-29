const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const models = {};

models.Sequelize = Sequelize;
models.sequelize = sequelize;

models.products = require("./product.model.js")(sequelize, Sequelize);
models.carts = require("./cart.model.js")(sequelize, Sequelize);
models.users = require("./user.model.js")(sequelize, Sequelize);
models.orders = require("./order.model.js")(sequelize, Sequelize);

module.exports = models;