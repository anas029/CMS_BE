const PageDetail = require('../models/PageDetail')

exports.pageDetail_create_post = (req, res) => {
    console.log(req.body);
    pageDetail = new PageDetail(req.body);
    page.save()
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                "status": "error", "message": "Bad Request, Please try again later", "data": null
            })
        });
}
exports.pageDetail_show_get = (req, res) => {
    console.log(req.query);
    let page = req.query.page
    PageDetail.findOne({ page })
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}