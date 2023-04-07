const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be more than 3 characters"],
        maxlength: [99, "This is too much man..... Chill!!!"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must be more than 3 characters"],
        maxlength: [99, "This is too much man..... Chill!!!"]
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "khalaas... your password is too weak"]
    }

},
    {
        timestamps: true
    })

userSchema.virtual('website', {
    ref: 'Website',
    localField: '_id',
    foreignField: 'owner'
})
// verifyPassword
userSchema.methods.verifyPassword = function (password) {
    console.log(password);
    console.log(this.password);
    return bcrypt.compareSync(password, this.password);
}
userSchema.set('toObject', { virtuals: true })
userSchema.set('toJSON', { virtuals: true })
// User Model
const User = mongoose.model("User", userSchema);

// Exports
module.exports = User;