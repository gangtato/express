const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    database: process.env.DATABASE_PROD,
    host: process.env.HOST_PROD,
    username: process.env.USERNAME_PROD,
    password: process.env.PASSWORD_PROD,
    dialect:'mysql'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });;

module.exports = sequelize;