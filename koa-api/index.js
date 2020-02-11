const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-body')
const mongoose = require('mongoose')

const tasks = require('./routes/tasks')
const devices = require('./routes/devices')

app.use(bodyParser())
app.use(tasks.routes())
app.use(devices.routes())

mongoose.connect('mongodb://localhost/koa-api', { useNewUrlParser: true })

app.listen(3000, () => {
    console.log("Server Runing on Port 3000");
})
