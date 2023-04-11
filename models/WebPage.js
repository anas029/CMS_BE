const mongoose = require('mongoose');

const webPageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  content: { type: String, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('WebPage', webPageSchema);