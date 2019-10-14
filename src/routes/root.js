const express = require("express");
const router = express.Router();

const userRouter = require("./users-routes");
const gamesRouter = require("./games-routes");

router.get("/", (req, res) => res.send({ msg: "success" }));
router.use("/user", userRouter);
router.use("/games", gamesRouter);

module.exports = router;
