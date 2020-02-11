const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to The API'
    })
})

app.post('/api/post', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: "Post Created",
                authData
            })
        }
    })
})

app.post('/api/login', (req, res) => {
    // Mock User
    const user = {
        id: 1,
        username: 'refri',
        email: 'refri@student.com'
    }
    jwt.sign({
                user: user
            }, 'secretkey', {
                expiresIn: '30s'
            }, (err, token) => {
        res.json({
            token
        })
    })
})

// Format of Token
// Authorization : Bearer <Access Token>

// verify token
function verifyToken(req, res, next) {
    // get auth heaader value
    const bearerHeader = req.headers['authorization']
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // split at the space
        const bearer = bearerHeader.split(' ')
        // get token from array
        const bearerToken = bearer[1]
        req.token = bearerToken
        // next middleware
        next()
    } else {
        // forbidden
        res.sendStatus(403)
    }
}

app.listen(3000, () => console.log('Server Started on port 3000'))