const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");

const { mongoUri } = require("./mongo.json");

const router = require("./router.const");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => {
    console.log("Connected to the database");
  })
  .catch(err => console.log(`Something went wrong ${err}`));

app.use("/api", router);

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
