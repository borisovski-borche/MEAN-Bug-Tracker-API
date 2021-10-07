require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler.const");

const router = require("./const/router.const");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(errorHandler);
app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => {
    console.log("Connected to the database");
  })
  .catch(err => console.log(`Something went wrong ${err}`));

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
