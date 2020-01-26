const express = require('express')
const path = require('path')

// init app
const app = express()

// Load View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Home Route
app.get('/', function(req, res){
    let articles = [
        {
            id:1,
            title:'Article One',
            author: "Brad One",
            body: "This is article one"
        },
        {
            id:2,
            title:'Article Two',
            author: "Brad Two",
            body: "This is article Two"
        },
        {
            id:1,
            title:'Article Three',
            author: "Brad Three",
            body: "This is article Three"
        }
    ]
    res.render('index', {
        title:'Articles',
        articles: articles
    });
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