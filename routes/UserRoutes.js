const Router = require('express').Router()
const userController = require('../controllers/UserController')

Router.get('/', (req, res) => res.send('this is the user root'))
Router.post('/new-user', userController.createUser)

module.exports = Router
