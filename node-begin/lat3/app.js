const server = require('./server.js')
const router = require('./router.js')
server.startServer(router.route)