const http = require('http')

function startServer() {
    function onRequest(req, res) {
        console.log("Request Received")
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