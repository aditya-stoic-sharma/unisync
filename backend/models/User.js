const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // mobile: {
    //     type: Number,
    //     required: true
    // },
    password: {
        type: String,
        required: true
    },
    // Course1: {
    //     type: String,
    //     required: true
    // },
    // Course2: {
    //     type: String,
    //     required: true
    // },
    // Course3: {
    //     type: String,
    //     required: true
    // },
    // Course4: {
    //     type: String,
    //     required: true
    // },
    // Course5: {
    //     type: String,
    //     required: true
    // },
    // Course6: {
    //     type: String,
    //     required: true
    // },
    // Openelective1: {
    //     type: String,
    //     required: true
    // },
    // Openelective2: {
    //     type: String,
    //     required: true
    // },
});
const User = mongoose.model('user', UserSchema);
module.exports = User