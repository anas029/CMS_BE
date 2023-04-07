const router = require("express").Router()
const websiteCtrl = require('../controllers/website')
router.get('', websiteCtrl.website_show_get)
router.post('', websiteCtrl.website_create_post)
router.get('/all', websiteCtrl.website_index_get)
router.get('/domain', websiteCtrl.website_showByDomain_get)

module.exports = router