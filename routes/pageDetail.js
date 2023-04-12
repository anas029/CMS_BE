const router = require("express").Router()
const pageDetailCtrl = require('../controllers/pageDetail')
router.get('', pageDetailCtrl.pageDetail_show_get)
router.post('', pageDetailCtrl.pageDetail_create_post)

module.exports = router