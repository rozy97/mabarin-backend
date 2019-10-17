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
          ML: 0,
          matchplayed: 0
        },
        {
          VG: 0,
          matchplayed: 0
        },
        {
          PUBG: 0,
          matchplayed: 0
        },
        {
          AOV: 0,
          matchplayed: 0
        },
        {
          TE: 0,
          matchplayed: 0
        },
        {
          COD: 0,
          matchplayed: 0
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
      date: Date.now(),
      game: req.body.game || "mobile legends",
      uidfriend: req.body.uidfriend || "blm ada uidfriend",
      rating: parseFloat(req.body.rating) || 0
    };
    const data2 = {
      date: Date.now(),
      ...req.body,
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
    const rating = parseFloat(req.body.rating);
    usersModels
      .addRating(uid, uidfriend, date, rating)
      .then(result => {
        formResponse.success(res, 200, result);
      })
      .catch(error => res.json(error));
  },
  getUserByUid: (req, res) => {
    const uid = req.params.uid;
    usersModels
      .getUserbyUid(uid)
      .then(result => formResponse.success(res, 200, result[0]))
      .catch(error => res.json(error));
  }
};

module.exports = usersControllers;
