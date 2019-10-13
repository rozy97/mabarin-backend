const eventsModels = require("../models/events-models");
const formResponse = require("../helpers/form-response");

const eventsControllers = {
  getAllEvents: (req, res) => {
    eventsModels
      .getAllEvents()
      .then()
      .catch();
  }
};

module.exports = eventsControllers;
