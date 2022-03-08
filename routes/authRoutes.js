const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

/* Login routes */

router.get('/login', AuthController.login)
router.get('/logout', AuthController.logout)
router.post('/login', AuthController.loginPost)

/* Register routes */

router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)

module.exports = router
