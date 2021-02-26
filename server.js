const express = require('express')
const db = require('./db/connection')
const todoRoute = require('./routes/TodoRoutes')
const userRoute = require('./routes/UserRoutes')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

app.use('/api', todoRoute)
app.use('/api', userRoute)

db.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
