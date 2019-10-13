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
    const id = req.params.id;
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
      .getAllGames(data)
      .then(result => {
        formResponse.success(res, 200, result);
      })
      .catch(error => res.json(error));
  },
  editGames: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    gamesModels
      .getAllGames(id, data)
      .then(result => {
        formResponse(res, 200, data);
      })
      .catch(error => res.json(erros));
  },
  deleteGames: (req, res) => {
    const id = req.params.id;
    gamesModels
      .getAllGames(id)
      .then(result => {
        formResponse.success(res, 200, result);
      })
      .catch(error => res.json(error));
  }
};

module.exports = gamesControllers;
