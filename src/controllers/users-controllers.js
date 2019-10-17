const usersModels = require("../models/users-models");
const formResponse = require("../helpers/form-response");

const usersControllers = {
  register: (req, res) => {
    const data = {
      // uid: req.body.uid || "Belum ada uid",
      // name: req.body.name || "Monyet",
      ...req.body,
      mabarhistory: [],
      rating: [
        {
          game: "Mobile Legend",
          matchplayed: 0,
          averageRating: 0
        },
        {
          game: "Vainglory",
          matchplayed: 0,
          averageRating: 0
        },
        {
          game: "PUBG",
          matchplayed: 0,
          averageRating: 0
        },
        {
          game: "Arena of Valor",
          matchplayed: 0,
          averageRating: 0
        },
        {
          game: "Tetris",
          matchplayed: 0,
          averageRating: 0
        },
        {
          game: "Call of Duty",
          matchplayed: 0,
          averageRating: 0
        }
      ]
    };
    usersModels
      .addUser(data)
      .then(result => {
        formResponse.success(res, 200, data);
      })
      .catch(error => res.json(error));
  },
  login: (req, res) => {
    const uid = req.body.uid;
    usersModels
      .getUserbyUid(uid)
      .then(result => {
        formResponse.success(res, 200, result[0]);
      })
      .catch(error => res.json(error));
  },
  editUser: (req, res) => {
    const uid = req.params.uid;
    const data = req.body;
    usersModels
      .edituser(uid, data)
      .then(result => {
        formResponse.success(res, 200, data);
      })
      .catch(error => res.json(error));
  },
  addHistoryMabar: (req, res) => {
    const uid = req.params.uid;
    const data = {
      // date: Date.now(),
      game: req.body.game || "mobile legends",
      uidfriend: req.body.uidfriend || "blm ada uidfriend",
      rating: parseFloat(req.body.rating) || 0
    };
    const data2 = {
      // date: Date.now(),
      ...req.body,
      image: `https://raw.githubusercontent.com/rozy97/pic/master/${req.body.game}.jpg`,
      rating: 0
    };
    usersModels
      .addHistoryMabar(uid, data2)
      .then(result => formResponse.success(res, 200, data2))
      .catch(error => res.json(error));
  },
  addRating: async (req, res) => {
    const uid = req.params.uid;
    const uidfriend = req.body.friendUid;
    const date = parseInt(req.body.date);
    const rating = parseInt(req.body.rating);
    const gameName = req.body.game;
    usersModels
      .addRating(uid, uidfriend, date, rating)
      .then(result => {
        // formResponse.success(res, 200, result);
        usersModels
          .getUserbyUid(uid)
          .then(reslt => {
            // console.log(reslt[0].mabarhistory);
            const historyMabar = reslt[0].mabarhistory.filter(item => {
              return item.game == gameName;
            });
            // console.log(historyMabar);
            const matchplayed = historyMabar.length;
            let averageRating = 0,
              count = 0;
            for (let i = 0; i < matchplayed; i++) {
              if (historyMabar[i].rating !== 0) {
                averageRating += historyMabar[i].rating;
                count += 1;
              }
            }
            // console.log(averageRating);
            averageRating = (averageRating / count).toFixed(1);
            usersModels
              .averageRating(uid, gameName, averageRating, matchplayed)
              .then(result3 => formResponse.success(res, 200, result3))
              .catch(error => res.json(error));
          })
          .catch(error => res.json(error));
      })
      .catch(error => res.json(error));
  },
  getUserByUid: (req, res) => {
    const uid = req.params.uid;
    usersModels
      .getUserbyUid(uid)
      .then(result => {
        console.log(result[0]);
        return formResponse.success(res, 200, result[0]);
      })
      .catch(error => res.json(error));
  }
};

module.exports = usersControllers;
