const mysql = require('mysql');

require('dotenv').config(); // load .env

const HOSTNAME = process.env.DB_HOST;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

class Database {
  constructor(hostname, username, password) {
    this.connection = mysql.createConnection({
      host: hostname,
      user: username,
      password: password,
      database: 'ktp',
    });

    this.connection.connect((err) => {
      if (err) {
        console.log(`CAN\'T CONNECT TO DATABASE ${username}@${hostname}`);
      }
      return;
    });
  }

  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'SELECT * FROM users;',
        timeout: 30000,
      }, (error, results, fields) => {
        if (error) {
          throw new Error(error);
        }

        return resolve(results);
      })
    });
  }

  getUserByNik(nik) {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'SELECT * FROM profiles WHERE nik = ?;',
        timeout: 30000,
        values: [nik]
      }, (error, results, fields) => {
        if (error) {
          throw new Error(error);
        }
        return resolve(results[0]);
      })
    });
  }
  // select * from users inner join profiles on profiles.profileId = users.profileId;
  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'SELECT * FROM users WHERE email = ?;',
        timeout: 30000,
        values: [email]
      }, (error, results, fields) => {
        if (error) {
          throw new Error(error);
        }
        return resolve(results[0]);
      })
    });
  }
}

const database = new Database(HOSTNAME, USERNAME, PASSWORD);
module.exports = {
  database
};