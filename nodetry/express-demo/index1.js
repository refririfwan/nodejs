const express = require('express');
const app = express();
// method (HTTP method)
// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3])
})

//  /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id)
})

//  /api/courses/2019/juli
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params)
})

//  /api/courses/2019/juli?tanggal query
app.get('/api/course/:year/:month', (req, res) => {
    res.send(req.query)
})

// port 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))