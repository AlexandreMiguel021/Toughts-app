const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')
const checkAuth = require('../helpers/auth').checkAuth

router.get('/', ToughtController.showToughts)
router.get('/dashboard', checkAuth, ToughtController.dashboard)

router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit/:id', checkAuth, ToughtController.updateToughtSave)

router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtSave)

router.post('/remove', checkAuth, ToughtController.removeTought)

module.exports = router
