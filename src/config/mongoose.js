const mongoose = require('mongoose');

const { dbHost, dbName, dbPort, dbUser, dbPass } = require('../../utilities');

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=> console.log("Server database terhubung"));

module.exports = db;