const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    birthday: { type: Date, required: true }
});

module.exports = mongoose.model('User', UserSchema);