const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("morgan");
const router = require("./src/routes/root");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());
app.use(helmet({ xssFilter: true }));

app.get("/", (req, res) => res.send({ msg: "testing success" }));
app.use("/api", router);

// running server
const port = 6969;
app.listen(port, () => console.log(`server listening on port ${port}`));
