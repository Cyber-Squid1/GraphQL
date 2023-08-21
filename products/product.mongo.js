const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const productSchema = Schema({
    _id: Schema.Types.ObjectId,
    Name: {
        type: String,
        required: true,
        max: 100
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    review: [{
        type: Schema.Types.ObjectId,
        ref: 'reviews', // ref is for refrence from that schema
        required: false
    }]
});

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
})

const products = mongoose.model('products', productSchema);
const reviews = mongoose.model('reviews', reviewSchema);

module.exports = {
    products,
    reviews
}