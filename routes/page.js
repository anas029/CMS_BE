const router = require("express").Router()
const pageCtrl = require('../controllers/page')
router.get('', pageCtrl.page_show_get)
router.post('', pageCtrl.page_create_post)
router.get('/all', pageCtrl.page_index_get)
router.get('/header', pageCtrl.page_header_get)
router.get('/main', pageCtrl.page_main_get)
router.get('/footer', pageCtrl.page_footer_get)

module.exports = router