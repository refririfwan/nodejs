var url = 'http://mylogger.io/log';

function log(message) {
    // send http request
    console.log(message);
}

module.exports = log;
// module.exports.log = log;
// module.exports.endPoint = url;

// $ jshint app.js for check someproblem