const usersModels = require("../models/users-models");
const formResponse = require("../helpers/form-response");

const usersControllers = {
  register: (req, res) => {
    const data = {
      uid: req.body.uid || "Belum ada uid",
      name: req.body.name || "Monyet",
      image: req.body.image || "http://picsum.photos/100/100",
      mabarhistory: [],
      rating: []
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
    const uid = req.body.uid;
    const data = req.body;
    usersModels
      .edituser(uid, data)
      .then(result => {
        formResponse.success(res, 200, data);
      })
      .catch(error => res.json(error));
  },
  updateRating: (req, res) => {
    usersModels
      .updateRating()
      .then()
      .catch();
  },
  addHistoryMabar: (req, res) => {
    usersModels
      .addHistoryMabar()
      .then()
      .catch();
  }
};

module.exports = usersControllers;
