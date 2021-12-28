const mongoose = require('mongoose')
const  {ReviewSchema} = require('./review')

const RestaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Restaurant Name is required']
    },
    address: {
        type: String,
        default: 'Not available'
    },
    cuisine: {
        type: String,
        default: 'Indian'
    },
    reviews: [ ReviewSchema ]
})


module.exports = mongoose.model('Restaurants', RestaurantSchema)
