const querystring = require('querystring');

function home(res) {
    console.log("Executing 'home' handler")
    let htmlfile = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/review" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>'
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(htmlfile)
    res.end()
}

function review(res, reviewData) {
    console.log("Executing 'review' handler")
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.write("Your review is " + querystring.parse(reviewData).text);
    res.end();
}

exports.home = home
exports.review = review