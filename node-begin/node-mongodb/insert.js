const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/fruits'
mongoClient.connect(url, function (err, db) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to ", url)
        const collection = db.collection('apples')
        const doc1 = {
            name: 'apple california',
            color: 'red'
        }

        const doc2 = {
            name: 'apple malang',
            color: 'green'
        }
        collection.insert([doc1, doc2], function (err, res) {
            if (err) {
                console.log(err)
            } else {
                console.log("%d docs inserted", res.inseredCountd)
            }
            db.close()
        })
    }
})