const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/users-controllers");

router.post("/uid", usersControllers.login);

module.exports = router;
