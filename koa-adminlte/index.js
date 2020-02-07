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
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})

// Routes
// dashboard
router.get('/dashboard', async ctx => {
    await ctx.render('dashboard', {
        title: "Dashboard",
        link: "dashboard"
    })
})

// device
router.get('/device', async ctx => {
    await ctx.render('device', {
        title: "Device",
        link: "device"
    })
})

// data bucket
router.get('/dataBucket', async ctx => {
    await ctx.render('dataBucket', {
        title: "Data Bucket",
        link: "dataBucket"
    })
})

// End Point
router.get('/endpoints', async ctx => {
    await ctx.render('endpoints', {
        title: "Endpoints",
        link: "endpoints"
    })
})

// Profile
router.get('/profile', async ctx => {
    await ctx.render('profile', {
        title: "Profile",
        link: "profile"
    })
})

// Setting
router.get('/setting', async ctx => {
    await ctx.render('setting', {
        title: "Setting",
        link: "setting"
    })
})

// Access Token
router.get('/accessToken', async ctx => {
    await ctx.render('accessToken', {
        title: "Access Token",
        link: "accessToken"
    })
})

// Router Middleware
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log('Server Started on port 3000'))