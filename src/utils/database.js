const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  port: 5432,
  database:"eCommerce",
  username: "postgres",
  password: "Naranjo1988",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
