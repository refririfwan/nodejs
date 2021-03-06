const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressValidator =  require('express-validator')
const flash = require('connect-flash')
const session = require('express-session')

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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

// Express Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

// Express Meesages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
})

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

// add Submit POST Route
app.post('/articles/add', function(req, res){
    // console.log(req.body.title);
    // return
    let article = new Article()
    article.title = req.body.title
    article.author = req.body.author
    article.body = req.body.body
    article.save(function(err){
        if(err){
            console.log(err);
            return
        } else {
            res.redirect('/')
        }
    })
})

// Get Single Article
app.get("/article/:id", function(req,res){
    Article.findById(req.params.id, function(err, article){
        // console.log(article.title)
        // return
        res.render('article', {
            article:article
        })
    })
})

// Edit Single Article
app.get("/article/edit/:id", function(req,res){
    Article.findById(req.params.id, function(err, article){
        res.render('edit_article', {
            title: 'Edit Article',
            article:article
        })
    })
})

// Edit Submit POST Route
app.post('/articles/edit/:id', function(req, res){
    let article = {}
    article.title = req.body.title
    article.author = req.body.author
    article.body = req.body.body
    let query = {_id:req.params.id}
    Article.update(query, article, function(err){
        if(err){
            console.log(err);
            return
        } else {
            res.redirect('/')
        }
    })
})

app.delete('/article/delete/:id', function(req, res){
    let query = {_id:req.params.id}
    Article.remove(query, function(err){
        if(err){
        console.log(err)
        } else {
            res.send('Success')
        }
    })
})

// Start Server
app.listen(3000, function(){
    console.log("Server Started on port 3000")
})