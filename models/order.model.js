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
      date: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.ENUM,
        values: ["pending", "shipped", "delivered"],
      },
      address: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.FLOAT,
      },
    });
  
    return Order;
  }