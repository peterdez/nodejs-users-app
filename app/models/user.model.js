const mongoose = require('mongoose');
const uuid = require('uuid');

const UserSchema = mongoose.Schema({
    userId: { type: String, default: uuid.v1, unique : true },
    accountId: { type: String, default: uuid.v4, unique : true },
    firstName: String,
    lastName: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);