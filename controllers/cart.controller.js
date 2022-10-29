const models = require("../models");
const Cart = models.carts;

exports.create = (req, res) => {
  if (!req.body.userId) {
    res.status(400).send({
      message: "The request is empty.",
    });
    return;
  }

  const cart = {
    userId: req.body.userId,
    productId: req.body.productId,
    quantity: req.body.quantity,
  };

  Cart.create(cart)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Cart.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cart was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Cart with id=${id}. Maybe Cart was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Cart with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Cart.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Cart was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Cart with id=${id}. Maybe Cart was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Cart with id=" + id,
      });
    });
};

exports.findAll = (req, res) => {
  Cart.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Cart.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Cart with id=" + id,
      });
    });
};

exports.findAllByUserId = (req, res) => {
  const userId = req.params.userId;

  Cart.findAll({
    where: { userId: userId },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Cart with userId=" + userId,
      });
    });
};

exports.findAllByProductId = (req, res) => {
  const productId = req.params.productId;

  Cart.findAll({
    where: { productId: productId },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Cart with productId=" + productId,
      });
    });
};

exports.findAllByUserIdAndProductId = (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.productId;

  Cart.findAll({
    where: { userId: userId, productId: productId },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "Error retrieving Cart with userId=" +
          userId +
          " and productId=" +
          productId,
      });
    });
};
