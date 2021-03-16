const mongoose = require('mongoose');
const User = require('./user')

const commentSchema = new mongoose.Schema({
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    body: String
}, { timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;