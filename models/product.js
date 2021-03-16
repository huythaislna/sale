const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	price: String,
    comments: [{
        comment: {
            type: String,
            ref: 'Comment'
        }
    }]
});

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;