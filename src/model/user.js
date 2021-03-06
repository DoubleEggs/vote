/**
 * @page
 * @module
 * @author Rube
 * @date 15/10/29
 * @desc
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        userKey: String,
        voteKey: String,
        chooseItem: String,
        submitTime: String
    },
    {collection: 'User'}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;