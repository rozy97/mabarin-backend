const conn = require("../configs/db-config");

const eventsModels = {
  getAllEvents: () => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("events")
        .find()
        .toArray();
      resolve(result);
    });
  },
  getEventById: id => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("events")
        .find({ id })
        .toArray();
      resolve(result);
    });
  },
  getEventByName: name => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("events")
        .find({ name })
        .toArray();
      resolve(result);
    });
  },
  addEvent: data => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("events")
        .insertOne(data);

      resolve(result);
    });
  },
  editEvent: (id, data) => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("events")
        .updateOne({ id }, { $set: data });

      resolve(result);
    });
  },
  deleteEvent: id => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("events")
        .findOneAndDelete({ id });

      resolve(result);
    });
  }
};

module.exports = eventsModels;
