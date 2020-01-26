const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/node-express', {useUnifiedTopology: true, useNewUrlParser: true} )
const db = mongoose.connection

// Check connections
db.once('open', function(){
    console.log('connected to mongodb');
})

// Check for DB errors
db.on('error', function(err){
    console.log(err);
})

// init app
const app = express()

// Bring in Models
let Article = require('./models/article')

// Load View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Home Route
app.get('/', function(req, res){
    // let articles = [
    //     {
    //         id:1,
    //         title:'Article One',
    //         author: "Brad One",
    //         body: "This is article one"
    //     },
    //     {
    //         id:2,
    //         title:'Article Two',
    //         author: "Brad Two",
    //         body: "This is article Two"
    //     },
    //     {
    //         id:1,
    //         title:'Article Three',
    //         author: "Brad Three",
    //         body: "This is article Three"
    //     }
    // ]
    Article.find({}, function(err, articles){
        if(err){
            console.log(err)
        } else {
        res.render('index', {
            title:'Articles',
            articles: articles
        })
        }
    })
})

// Add Route
app.get('/articles/add', function(req, res){
    res.render('add', {
        title: 'Add Article'
    })
})

// Start Server
app.listen(3000, function(){
    console.log("Server Started on port 3000")
})