// Require Model
const Article = require("../models/Article");
const Author = require("../models/Author");

// Require Moment
const moment = require('moment');

exports.author_create_get = (req, res) =>{
    res.render("author/add");
}

exports.author_create_post = (req, res) => {
    console.log(req.body);
    let author = new Author(req.body);

    // Save author
    author.save()
    .then((authors)=>{
        // res.redirect("/author/index");
        res.json({authors})
    })
    .catch((err) => {
        console.log(err);
        res.send("Please try again later");
    });
}

// HTTP GET - Author Index
exports.author_index_get = (req, res) => {
    Author.find().populate('article')
    .then(authors => {
        // res.render("author/index", {authors, moment})
        res.json({authors:authors})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Author by ID
exports.author_show_get = (req, res) => {
    console.log(req.query.id);
    Author.findById(req.query.id).populate('article')
    .then(author => {
        res.render("author/detail", {author, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP GET - Load Author Edit Form
exports.author_edit_get = (req, res) => {
    Author.findById(req.query.id)
    .then(author => {
        // res.render("author/edit", {author});
        res.json({author})
    })
    .catch(err => {
        console.log(err);
    })
}

// HTTP PUT - Author Update
exports.author_update_put = (req, res) => {
    console.log(req.body._id);
    Author.findByIdAndUpdate(req.body._id, req.body, {new : true})
    .then((author) => {
        // res.redirect("/author/index");
        res.json({author})
    })
    .catch(err => {
        console.log(err)
    });
}

  // HTTP DELETE -  Author
  exports.author_delete_get = (req, res) => {
    console.log(req.query.id);
    Author.findByIdAndDelete(req.query.id)
    .then((author)=>{
        // res.redirect("/author/index");
        res.json({author})
    })
    .catch(err => {
        console.log(err);
    })
};