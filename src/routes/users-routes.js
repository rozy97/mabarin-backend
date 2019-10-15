const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/users-controllers");

router
  .post("/login", usersControllers.login)
  .post("/register", usersControllers.register)
  .patch("/uid/:uid", usersControllers.editUser)
  .patch("/addhistory/:uid", usersControllers.addHistoryMabar);

module.exports = router;
