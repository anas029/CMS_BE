const Page = require('../models/Page');

const page_create_post = (req, res) => {
    console.log(req.body);
    let page = new Page(req.body);
    page.save()
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.send("Please try again later");
        });
}
const page_show_get = (req, res) => {
    console.log(req.query.id);
    Page.findById(req.query.id)
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}
module.exports = { page_create_post, page_show_get }