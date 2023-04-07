const router = require("express").Router()
const websiteCtrl = require('../controllers/website')
router.get('', websiteCtrl.website_show_get)
router.post('', websiteCtrl.website_create_post)

module.exports = router