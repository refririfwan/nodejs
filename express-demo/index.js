const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json())
const courses = [{
        id: 1,
        name: 'courses1'
    },
    {
        id: 2,
        name: 'courses2'
    }, {
        id: 3,
        name: 'courses3'
    }
]

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

//  /api/courses/1
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send('Course Not Found') // 404 Not Found
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(5).required()
    }

    const result = Joi.validate(req.body, schema)
    // input validation
    // if (!req.body.name || req.body.name.length < 5) {
    if (result.error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message)
        return
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
    // look up the courses
    const course = courses.find(c => c.id === parseInt(req.params.id))
    // if not existing, return 404
    if (!course) return res.status(404).send('Course Not Found') // 404 Not Found

    // validate
    // const result = validtaeCourse(req.body)
    const {
        error
    } = validtaeCourse(req.body)
    // if invalid, return 400 - bad request
    if (error) {
        // 400 Bad Request
        res.status(400).send(error.details[0].message)
        return
    }

    // update course
    courses.name = req.body.name;
    // return the update course
    res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
    // look up the courses
    const course = courses.find(c => c.id === parseInt(req.params.id))
    // if not existing, return 404
    if (!course) return res.status(404).send('Course Not Found') // 404 Not Found

    // delete
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    // return course
    res.send(course)
})

function validtaeCourse(course) {
    const schema = {
        name: Joi.string().min(5).required()
    }

    return result = Joi.validate(course, schema)
}

// port 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))