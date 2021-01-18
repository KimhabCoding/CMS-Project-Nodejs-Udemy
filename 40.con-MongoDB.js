const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const log = console.log; 
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';

// Collection | Table User 
const dbCol = 'mammals'; 
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.strictEqual(null, err);
  log("Connected successfully to server");
 
  const db = client.db(dbName);
  
  db.collection(dbCol).insertOne({
    name: 'Horse'
  }, (err, result) => {
      if (err) {
        return log(err); 
      }
      log(`Data name ${name} is inserted.`); 
  }); 
 
  client.close();
});

// Mongodb in expressjs: https://expressjs.com/en/guide/database-integration.html#mongodb