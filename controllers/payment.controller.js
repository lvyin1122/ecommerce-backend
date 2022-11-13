const secret = "secrete_test";

const stripe = require("stripe")(secret);

exports.create = (req, res) => {
    console.log("stripe");
    console.log(req);
    stripe.charges.create(
        {
        amount: req.body.amount,
        currency: "usd",
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