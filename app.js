require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const morgan = require('morgan')
app.use(morgan('tiny'))

const movies = require('./src/router/movieRouter')
app.use('/movies', movies)

const users = require('./src/router/userRouter')
app.use('/users', users)

const path = require('path')
app.use('/upload', express.static(path.join(__dirname, 'upload')))


app.listen(PORT, () => {
    console.log(`App is Connected to PORT ${PORT}`)
})

