const express = require("express");
const router = express.Router();

const gamesControllers = require("../controllers/games-controllers");

router
  .get("/", gamesControllers.getAllGames)
  .get("/id/:id", gamesControllers.getGameById)
  .get("/name/:name", gamesControllers.getGameByName)
  .post("/", gamesControllers.addGame)
  .patch("/id/:id", gamesControllers.editGames)
  .delete("/id/:id", gamesControllers.deleteGames);

module.exports = router;
