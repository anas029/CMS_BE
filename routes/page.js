const router = require("express").Router()
const pageCtrl = require('../controllers/page')
router.get('', pageCtrl.page_show_get)
router.post('', pageCtrl.page_create_post)

module.exports = router