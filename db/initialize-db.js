const init = require("./init");
async function initializeDb() {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/";

  await MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").insertOne(init, function (err, res) {
      if (err) throw err;
      console.log("database created and 1 document inserted");
      db.close();
    });
  });
}
module.exports = initializeDb;
