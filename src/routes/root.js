const express = require("express");
const router = express.Router();

const userRouter = require("./users-routes");
const gamesRouter = require("./games-routes");
const eventsRouter = require("./events-routes");

router.get("/", (req, res) => res.send({ msg: "success" }));
router.use("/users", userRouter);
router.use("/games", gamesRouter);
router.use("/events", eventsRouter);

module.exports = router;
