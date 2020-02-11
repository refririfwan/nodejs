const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const render = require('koa-ejs')
const json = require('koa-json')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
// const mongo = require('koa-mongo')

// Initial Koa and Router
const app = new Koa()
const router = new Router()

// Middleware
app.use(bodyParser())
app.use(json())
// app.use(mongo({
//     hots: 'localhost',
//     port: 27017,
//     db: 'koa-adminlte'
// }))
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
// landing page
router.get('/', async ctx => {
    await ctx.render('landing', {
        title: "Serverless IoT Platform",
    })
})

// login
router.get('/login', async ctx => {
    await ctx.render('login', {
        title: "Login",
    })
})

// register
router.get('/register', async ctx => {
    await ctx.render('register', {
        title: "Register",
    })
})

// forgot password
router.get('/forgotPassword', async ctx => {
    await ctx.render('forgotPassword', {
        title: "Forgot Password",
    })
})

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