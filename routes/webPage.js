const router = require("express").Router()
const webPageCtrl = require('../controllers/webPage')

router.post('', webPageCtrl.webpage_create_post)


module.exports = router