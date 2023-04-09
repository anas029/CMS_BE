// Website model
const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    domain: {
        type: String, required: true, unique: true, lowercase: true, minlength: 6, match: /^[a-zA-Z]{6,}$/
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    {
        timestamps: true
    })
websiteSchema.virtual('page', {
    ref: 'Page',
    localField: '_id',
    foreignField: 'website'
})

websiteSchema.set('toObject', { virtuals: true })
websiteSchema.set('toJSON', { virtuals: true })
module.exports = mongoose.model('Website', websiteSchema);


