module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM,
        values: ["pending", "delivered", "cancelled"],
      },
      total: {
        type: Sequelize.FLOAT,
      },
    });
  
    return Order;
  }