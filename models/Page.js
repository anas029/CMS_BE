// Page model
const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['header', 'main', 'footer'], default: 'main' },
    path: { type: String, required: true },
    content: { type: String, required: true },
    website: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Website',
        required: true
    }
},
    {
        timestamps: true
    })
pageSchema.virtual('fullUrl').get(() => {
    return this.model('Website').findById(this.website)
        .then(website => { return `${website.domain}/${this.path}` })
})
module.exports = mongoose.model('Page', pageSchema);

