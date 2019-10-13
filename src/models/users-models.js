const conn = require("../configs/db-config");

const usersModels = {
  getAllUser: () => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("users")
        .find()
        .toArray();
      resolve(result);
    });
  },
  getUserByName: name => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("users")
        .find({ name })
        .toArray();
      resolve(result);
    });
  },
  getUserbyUid: uid => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("users")
        .find({ uid })
        .toArray();
      resolve(result);
    });
  },
  addUser: data => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("users")
        .insertOne(data);
      resolve(result);
    });
  },
  edituser: (uid, data) => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("users")
        .updateOne({ uid }, { $set: data });
      resolve(result);
    });
  },
  deleteUser: uid => {
    return new Promise((resolve, reject) => {
      result = conn()
        .collection("users")
        .findOneAndDelete({ uid });
      resolve(result);
    });
  }
};
