const Page = require('../models/Page');

exports.page_create_post = (req, res) => {
    console.log(req.body);
    let page = new Page(req.body);
    page.save()
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.send("Please try again later");
        });
}
exports.page_show_get = (req, res) => {
    console.log(req.query.id);
    Page.findById(req.query.id)
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}
exports.page_index_get = (req, res) => {
    Page.find()
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}
exports.page_header_get = (req, res) => {
    console.log(req.query.id);
    const websiteId = req.query.id
    Page.findOne({ website: websiteId, type: 'header' })
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}
exports.page_main_get = (req, res) => {
    console.log(req.query.id);
    const websiteId = req.query.id
    const path = req.query.path
    console.log(path);
    Page.findOne({ website: websiteId, path, type: 'main' })
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err.message);
            res.status(400).json("Please try again later");
        });
}
exports.page_footer_get = (req, res) => {
    console.log(req.query.id);
    const websiteId = req.query.id
    Page.findOne({ website: websiteId, type: 'footer' })
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}
