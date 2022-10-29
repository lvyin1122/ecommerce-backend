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
      quantity: {
        type: Sequelize.INTEGER,
      },
    });
  
    return Cart;
  }