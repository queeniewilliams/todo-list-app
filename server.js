const express = require('express')
const db = require('./db/connection')
const todoRoute = require('./routes/TodoRoutes')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())

app.use('/api', todoRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}
db.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
