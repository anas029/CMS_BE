const express = require('express');
const router = require("express").Router()
const websiteCtrl = require('../controllers/website')
const auth = require('../middleware/auth')

let methodOverride = require("method-override");
router.use(methodOverride('_method'));

router.get('', websiteCtrl.website_show_get)
router.post('', auth.isAuth, websiteCtrl.website_create_post)
router.put('', websiteCtrl.website_edit_put)
router.delete('', websiteCtrl.website_delete)
router.post('', auth.isAuth, websiteCtrl.website_create_post)
router.get('/all', websiteCtrl.website_index_get)
router.get('/domain', websiteCtrl.website_showByDomain_get)
router.get('/user', websiteCtrl.website_showByUser_get)

module.exports = router