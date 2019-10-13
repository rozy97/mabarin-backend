require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const mongoURI = process.env.MONGO_URI;
const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let conn;

const db = {
  connect: () => {
    return new Promise((resolve, reject) => {
      client.connect(err => {
        if (err) reject(err);
        console.log("Database connectted");

        conn = client.db("mabarin");
        resolve(conn);
      });
    });
  },
  getDB: () => {
    return conn;
  }
};

db.connect();
module.exports = db.getDB;
