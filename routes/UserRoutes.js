const Router = require('express').Router()
const userController = require('../controllers/UserController')

Router.get('/', (req, res) => res.send('this is the user root '))

Router.get('/users', userController.getAllUsers)
Router.get('/user', userController.getUser)
Router.post('/new-user', userController.createUser)

module.exports = Router
