module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cartItem", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  
    return Cart;
  }