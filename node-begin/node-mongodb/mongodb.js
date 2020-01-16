const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/fruits'
mongoClient.connect(url, function (err, db) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to ", url)
        db.close()
    }
})