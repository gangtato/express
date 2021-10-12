const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    database: 'eduwork-cruds-v2',
    host: 'localhost',
    username: 'william',
    password: 'william123',
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