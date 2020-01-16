const express = require('express')
const router = express.Router()
const ctrl = require('../controller/index.js')

router.get('/add', ctrl.showindex)
router.get('/login', ctrl.showdenglu)
router.post('/loginpost', ctrl.showlogin)
router.get('/article', ctrl.showarticle)
router.post('/article/add', ctrl.showarticleadd)
router.get('/play', ctrl.shpowplay)

module.exports = router
