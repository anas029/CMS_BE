const WebPage = require('../models/WebPage');


exports.webpage_create_post = async (req, res) => {
    const { title, url, content } = req.body;
    const website = new WebPage({ title, url, content });
    try {
      await website.save();
      res.status(201).send(website);
    } catch (err) {
      res.status(400).send(err);
    }
  }