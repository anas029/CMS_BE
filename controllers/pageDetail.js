const PageDetail = require('../models/PageDetail')

exports.pageDetail_create_post = (req, res) => {
    console.log(req.body);
    pageDetail = new PageDetail(req.body)
    pageDetail.save()
        .then(result => { res.status(200).json(result) })
        .catch((err) => {
            console.log(err.message);
            res.status(400).json({
                "status": "error", "message": "Bad Request, Please try again later", "data": null
            })
        });
}
// exports.pageDetail_create_post = (req, res) => {
//     console.log(req.body);
//     let pageDetail = new PageDetail(req.body);
//     PageDetail.findOne({ website: req.body.website, path: req.body.path })
//         .then(result => {
//             if (result) {
//                 const pageDetailNew = { ...result, ...pageDetail }
//                 pageDetailNew.save()
//             } else {
//                 pageDetail.save()
//             }
//             // .then(result => { res.status(200).json(result) })
//             // .catch((err) => {
//             //     res.status(400).json({
//             //         "status": "error", "message": "Bad Request, Please try again later", "data": null
//             //     })
//             // });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(400).json({
//                 "status": "error", "message": "Bad Request, Please try again later", "data": null
//             })
//         });
// }
// exports.pageDetail_show_header = (req, res) => {
//     console.log(req);
//     let path = req.query.path
//     let website = req.query.website
//     console.log(path, website);
//     PageDetail.findOne({ website, path })
//         .then(result => {
//             console.log(result)
//             res.status(200).json(result)
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(400).json("Please try again later");
//         });
// }
// exports.pageDetail_show_footer = (req, res) => {
//     console.log(req);
//     let path = req.query.path
//     let website = req.query.website
//     console.log(path, website);
//     PageDetail.findOne({ website, path })
//         .then(result => {
//             console.log(result)
//             res.status(200).json(result)
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(400).json("Please try again later");
//         });
// }
exports.pageDetail_show_get = (req, res) => {
    // console.log(req);
    let path = req.query.path
    let website = req.query.website
    console.log(path, website);
    // console.log(path, website);
    PageDetail.findOne({ path, website })
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}
exports.pageDetail_update_put = (req, res) => {
    PageDetail.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}
exports.pageDetail_delete = (req, res) => {
    PageDetail..findByIdAndDelete(req.query.id)
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Please try again later");
        });
}