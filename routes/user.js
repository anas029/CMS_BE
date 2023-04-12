const router = require("express").Router()
const userCtrl = require('../controllers/user')
const auth = require('../middleware/auth')

router.use(auth.isAdmin)

router.get('/', userCtrl.user_index)
router.post('/create', userCtrl.user_create)
router.put('/update', userCtrl.user_update)
router.delete('/delete', userCtrl.user_delete)

module.exports = router