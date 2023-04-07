const Website = require('../models/Website');
const User = require('../models/User');

exports.website_create_post = (req, res) => {
    console.log(req.body)
    let website = new Website(req.body);
    User.findById(req.body.owner)
        .then(user => {
            // website.owner = user
            website.save()
                .then(result => { res.status(200).json(result) })
                .catch((err) => {
                    console.log(err);
                    res.status(400).json({
                        "status": "error", "message": "Bad Request, Please try again later", "data": null
                    })
                })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                "status": "error", "message": "Bad Request, user not found", "data": null
            })
        })

}
exports.website_show_get = (req, res) => {
    console.log(req.query.id);
    Website.findById(req.query.id)
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                "status": "error", "message": "Bad Request, Please try again later", "data": null
            });
        });
}
exports.website_showByDomain_get = (req, res) => {
    console.log(req.query.domain);
    const domain = req.query.domain
    Website.findOne({ domain })
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                "status": "error", "message": "Bad Request, Please try again later", "data": null
            });
        });
}
exports.website_index_get = (req, res) => {
    Website.find()
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                "status": "error", "message": "Bad Request, Please try again later", "data": null
            });
        });
}