const express = require("express");
const router = express.Router();

const userRouter = require("./users-routes");

router.use("/user", userRouter);
router.get("/", (req, res) => res.send({ msg: "success" }));

module.exports = router;
