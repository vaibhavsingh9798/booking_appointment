const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
router.get('/users',usersController.getUsers)

router.post('/user',usersController.postUser)

router.put('/user/:id',usersController.putUser)

router.delete('/user/:id',usersController.deleteUser)


module.exports = router