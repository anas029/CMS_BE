const mongoose = require('mongoose');

const PageDetailSchema = new mongoose.Schema({
  page: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Page',
    required: true
  }
}, { strict: 'throw' });

module.exports = mongoose.model('PageDetail', PageDetailSchema);

