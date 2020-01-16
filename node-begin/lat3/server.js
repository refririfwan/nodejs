const http = require('http')
const url = require('url')

function startServer(route, handle) {
    function onRequest(req, res) {
        const pathname = url.parse(req.url).pathname
        console.log("Request Received " + pathname)
        route(handle, pathname)
        res.writeHead(200, {
            "Content-type": "text/plain"
        })
        res.write("Halo from our server module")
        res.end()
    }
    http.createServer(onRequest).listen(8888)
    console.log("Server started on localhost port 8888")
}
exports.startServer = startServer