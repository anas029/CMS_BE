const router = require('express').Router();

// Controller
const authCntrl = require("../controllers/auth");

// Routes
// router.get("/signup", authCntrl.auth_signup_get);
router.get("/user", authCntrl.auth_user_get);
router.post("/signup", authCntrl.auth_signup_post);

// router.get('/signin', authCntrl.auth_signin_get);
router.post('/signin', authCntrl.auth_signin_post);

router.get("/logout", authCntrl.auth_logout_get);
// Exports
module.exports = router;