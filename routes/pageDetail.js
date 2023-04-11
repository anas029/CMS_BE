const router = require("express").Router()
const pageDetailCtrl = require('../controllers/pageDetail')
router.post('', pageDetailCtrl.pageDetail_create_post)
// router.get('/header', pageDetailCtrl.pageDetail_show_header)
// router.get('/footer', pageDetailCtrl.pageDetail_show_footer)
router.get('', pageDetailCtrl.pageDetail_show_get)

module.exports = router