const secret = process.env.STRIPE_SECRET_KEY;

const stripe = require("stripe")(secret);

exports.create = (req, res) => {
  stripe.charges.create(
    {
      amount: req.body.amount * 100,
      currency: "hkd",
      source: req.body.tokenId,
      description: "Test payment",
    },
    (err, charge) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(charge);
      }
    }
  );
};