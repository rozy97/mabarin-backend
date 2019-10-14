const conn = require("../configs/db-config");

const gamesModels = {
  getAllGames: () => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .find()
        .toArray();
      resolve(result);
    });
  },
  getGameById: _id => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .find({ _id })
        .toArray();
      resolve(result);
    });
  },
  getGameByName: name => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .find({ name })
        .toArray();
      resolve(result);
    });
  },
  addGame: data => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .insertOne(data);

      resolve(result);
    });
  },
  editGame: (_id, data) => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .updateOne({ _id }, { $set: data });

      resolve(result);
    });
  },
  deleteGame: _id => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .findOneAndDelete({ _id });

      resolve(result);
    });
  }
};

module.exports = gamesModels;
