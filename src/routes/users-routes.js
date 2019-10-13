const express = require("express");
const router = express.Router();

router.get("/testing/test", (req, res) => res.send("testing succescc"));

module.exports = router;
