const mysql = require('mysql');

require('dotenv').config(); // load .env

const HOSTNAME = process.env.DB_HOST;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

class Database {
  constructor(hostname, username, password, callback) {
    this.connection = mysql.createConnection({
      host: hostname,
      user: username,
      password: password,
      database: DB_NAME,
    });
    // this.connection.connect((err) => {
    //   if (err) {
    //     callback(`CAN\'T CONNECT TO DATABASE ${username}@${hostname}`);
    //     // console.log(`CAN\'T CONNECT TO DATABASE ${username}@${hostname}`);
    //     // return `CAN\'T CONNECT TO DATABASE ${username}@${hostname}`;
    //   }
    // });
  }

  async getAllUsers() {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'SELECT * FROM users;',
        timeout: 30000,
      }, (error, results, fields) => {
        if (error) {
          console.log(error.message);
        }

        return resolve(results[0]);
      })
    });
  }

  async getUserByNik(nik) {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'SELECT * FROM profiles WHERE nik = ?;',
        timeout: 30000,
        values: [nik]
      }, (error, results, fields) => {
        if (error) {
          console.log(error.message);
          // reject(error);
        }
        return resolve(results[0]);
      })
    });
  }
  // // select * from users inner join profiles on profiles.profileId = users.profileId;

  async getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'SELECT * FROM users WHERE email = ?;',
        timeout: 30000,
        values: [email]
      }, (error, results, fields) => {
        if (error) {
          console.log(error.message);
        }
        return resolve(results[0]);
      })
    });
  }

  async insertUser(email, password) {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'INSERT INTO users (email, password) VALUES (?, ?)',
        timeout: 30000,
        values: [email, password],
      }, (error, results, fields) => {
        if (error) {
          console.log(error.message);
        }

        return resolve(results);
      })
    });
  }

  async insertUserWithProfileId(email, profileId) {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'UPDATE users SET profileId = ? WHERE email = ?',
        timeout: 30000,
        values: [profileId, email],
      }, (error, results, fields) => {
        if (error) {
          console.log(error.message);
        }

        return resolve(results);
      })
    });
  }

  async insertProfile(nik, nama, provinsi, kabupaten, alamat) {
    return new Promise((resolve, reject) => {
      this.connection.query({
        sql: 'INSERT INTO profiles (nik, nama, provinsi, kabupaten, alamat) VALUES (?, ?, ?, ?, ?)',
        timeout: 30000,
        values: [nik, nama, provinsi, kabupaten, alamat],
      }, (error, results, fields) => {
        if (error) {
          console.log(error.message);
        }
        return resolve(results);
      })
    });
  }
}

const database = new Database(HOSTNAME, USERNAME, PASSWORD, (err) => {
  if (err) {
    console.log(err);
  }
});
module.exports = {
  database
};