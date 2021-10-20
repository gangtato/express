const { MongoClient } = require('mongodb');

const { dbHost, dbName, dbPort, dbUser, dbPass } = require('../../utilities');

const url = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

const client = new MongoClient(url);


(async () => {
    try{
        await client.connect();
        console.log("berhasil connect");
    }catch(err){
        console.log(err);
    }
})();

const db = client.db('eduwork-native');

module.exports = db;



