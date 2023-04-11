const router = require('express').Router();

// Controller
const authCntrl = require("../controllers/auth");

// Routes
// router.get("/signup", authCntrl.auth_signup_get);
router.post("/signup", authCntrl.auth_signup_post);

// router.get('/signin', authCntrl.auth_signin_get);
router.post('/signin', authCntrl.auth_signin_post);

router.get('/signout', authCntrl.auth_signout_get);

router.post("/user", authCntrl.auth_user_post);

router.put("/user/update", authCntrl.auth_user_update)

// Exports
module.exports = router;