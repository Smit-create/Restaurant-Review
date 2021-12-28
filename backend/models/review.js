const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: [true, 'Customer name must be provided']
    },
    reviewDescription: {
        type: String,
        required: [true, 'Review Description is required']
    },
    rating: {
        type: Number,
        min: [0, 'Must be at least 0, got {VALUE}'],
        max: [10, 'Must not be greater than 10, got {VALUE}']
    }
})

const ReviewModel = mongoose.model('Review', ReviewSchema)

module.exports = {
    ReviewModel,
    ReviewSchema
}