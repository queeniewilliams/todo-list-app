const { Router } = require('express');
const userController = require('../controllers/UserController');
const router = Router();


router.get('/', (req, res) => res.send('this is the user root'))
router.post('/', userController.createUser)


module.exports = router; 