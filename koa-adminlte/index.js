const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const render = require('koa-ejs')
const json = require('koa-json')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')

// Initial Koa and Router
const app = new Koa()
const router = new Router()

// Middleware
app.use(bodyParser())
app.use(json())
app.use(serve(__dirname + '/assets'));

// Views 
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'index',
    viewExt: 'html',
    cache: false,
    debug: false
})

// Routes
router.get('/', async ctx => {
    await ctx.render('dashboard', {
        title: "Dashboard"
    })
})

// Router Middleware
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log('Server Started on port 3000'))