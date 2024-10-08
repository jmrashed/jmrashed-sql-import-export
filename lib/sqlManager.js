require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Function to import SQL file
const importSQL = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      connection.query(data, (error) => {
        if (error) {
          return reject(error);
        }
        resolve();
      });
    });
  });
};

// Function to export the database to a SQL file
const exportSQL = (file) => {
  return new Promise((resolve, reject) => {
    const dumpCommand = `mysqldump -u ${process.env.DB_USERNAME} -p${process.env.DB_PASSWORD} ${process.env.DB_DATABASE} > ${file}`;

    require("child_process").exec(dumpCommand, (error) => {
      if (error) {
        return reject(error);
      }
      resolve();
    });
  });
};

module.exports = { importSQL, exportSQL };
