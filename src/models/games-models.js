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
  getGameById: id => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .find({ id })
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
  editGame: (id, data) => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .updateOne({ id }, { $set: data });

      resolve(result);
    });
  },
  deleteGame: id => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("games")
        .findOneAndDelete({ id });

      resolve(result);
    });
  }
};
