const express = require("express");
const router = express.Router();

const eventsControllers = require("../controllers/events-controllers");

router
  .get("/", eventsControllers.getAllEvents)
  .get("/id/:id", eventsControllers.getEventById)
  .get("/name/:name", eventsControllers.getEventByName);

module.exports = router;
