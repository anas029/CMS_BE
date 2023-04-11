const mongoose = require('mongoose');

const PageDetailSchema = new mongoose.Schema({
  website: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Website',
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
}, { strict: false });

module.exports = mongoose.model('PageDetail', PageDetailSchema);

