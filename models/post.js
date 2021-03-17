const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
	title: String,
	image: String,
    body: String,
    category: String,
    comments: [{
        comment: {
            type: String,
            ref: 'Comment'
        }
    }]
}, { timestamps: true});

const Post = mongoose.model('post', postSchema, 'posts');

module.exports = Post;