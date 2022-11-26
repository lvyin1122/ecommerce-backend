const express = require("express");
const cors = require("cors");

const models = require("./models");
models.sequelize.sync();

const app = express();
const port = 8800;

require("dotenv").config();

app.use(express.json());
app.use(cors());

require("./routes/product.routes")(app);
require("./routes/user.routes")(app);
require("./routes/order.routes")(app);
require("./routes/cart.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/payment.routes")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
