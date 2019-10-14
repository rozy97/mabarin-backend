const gamesModels = require("../models/games-models");
const formResponse = require("../helpers/form-response");

const gamesControllers = {
  getAllGames: (req, res) => {
    gamesModels
      .getAllGames()
      .then(result => {
        formResponse.success(res, 200, result);
      })
      .catch(error => res.json(error));
  },
  getGameById: (req, res) => {
    const ObjectId = require("mongodb").ObjectID;
    const id = new ObjectId(req.params.id);
    gamesModels
      .getGameById(id)
      .then(result => {
        formResponse.success(res, 200, result);
      })
      .catch(error => res.json(error));
  },
  getGameByName: (req, res) => {
    const name = req.params.name;
    gamesModels
      .getGameByName(name)
      .then(result => {
        formResponse.success(res, 200, result);
      })
      .catch(error => res.json(error));
  },
  addGame: (req, res) => {
    const data = req.body;
    gamesModels
      .addGame(data)
      .then(result => {
        formResponse.success(res, 200, data);
      })
      .catch(error => res.json(error));
  },
  editGames: (req, res) => {
    const ObjectId = require("mongodb").ObjectID;
    const id = new ObjectId(req.params.id);
    const data = req.body;
    gamesModels
      .editGame(id, data)
      .then(result => {
        formResponse.success(res, 200, data);
      })
      .catch(error => res.json(error));
  },
  deleteGames: (req, res) => {
    const ObjectId = require("mongodb").ObjectID;
    const id = new ObjectId(req.params.id);
    gamesModels
      .deleteGame(id)
      .then(result => {
        formResponse.success(res, 200, result);
      })
      .catch(error => res.json(error));
  }
};

module.exports = gamesControllers;
