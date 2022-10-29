const express = require("express")

const models = require("./models");
models.sequelize.sync();

const app = express();
const port = 8800;

app.use(express.json());

require("./routes/product.routes")(app);

app.listen(port, () => {
    console.log('Server is running on port 8800');
});