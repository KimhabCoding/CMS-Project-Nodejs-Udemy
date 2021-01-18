// const { MongoClient, ObjectId } = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');
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

  // log(ObjectId()); 
 
  const db = client.db(dbName);
  const object = new ObjectId(); 
  
  // Insert Data 
  /* db.collection(dbCol).insertOne({
    name: 'Horse', 
    legs: 2
  }, (err, result) => {
      if (err) {
        return log(err); 
      }
      log(`Data is inserted.`); 
      // log(ObjectId()); 
      log(object); 
  });  */

  // Fetching | READING Data 

  /* db.collection(dbCol).find().toArray(function (err, result) {
    if (err) throw err; 
    log(result); 
  });  */

  // Updating Data 
  // More about update: https://docs.mongodb.com/manual/reference/method/db.collection.update/#update-parameter
  db.collection(dbCol).findOneAndUpdate({
    _id: new ObjectId('600531871fb78a2028dd78f4')
  }, {
    $set: 
    {
      name: 'Updated-2'
    }

  }).then(result => {

    log(result); 

  }).catch(err => {
    
    log(err); 
  });
  
  client.close();
});

// Mongodb in expressjs: https://expressjs.com/en/guide/database-integration.html#mongodb