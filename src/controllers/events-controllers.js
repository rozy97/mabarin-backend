const eventsModels = require("../models/events-models");
const formResponse = require("../helpers/form-response");

const eventsControllers = {
  getAllEvents: (req, res) => {
    eventsModels
      .getAllEvents()
      .then(result => formResponse.success(res, 200, result))
      .catch(error => res.json(error));
  },
  getEventById: (req, res) => {
    const id = req.params.id;
    eventsModels
      .getEventById(id)
      .then(result => formResponse.success(res, 200, result[0]))
      .catch(error => res.json(error));
  },
  getEventByName: (req, res) => {
    const name = req.params.name;

    eventsModels
      .getEventByName(name)
      .then(result => formResponse.success(res, 200, result[0]))
      .catch(error => res.json(error));
  },
  addEvent: (req, res) => {
    const data = req.body;
    eventsModels
      .addEvent(data)
      .then(result => {
        formResponse(res, 200, result);
      })
      .catch(error => res.json(error));
  },
  editEvent: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    eventsModels
      .editEvent(id, data)
      .then(result => {
        formResponse(res, 200, result);
      })
      .catch(error => res.json(error));
  },
  deleteEvent: (req, res) => {
    const id = req.params.id;
    eventsModels
      .deleteEvent(id)
      .then(result => {
        formResponse(res, 200, result);
      })
      .catch(error => res.json(error));
  }
};

module.exports = eventsControllers;
