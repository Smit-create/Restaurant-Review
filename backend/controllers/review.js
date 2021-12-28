const Restaurant = require('../models/restaurant')
const {ReviewModel} = require('../models/review')

const getReview = async (req, res) => {
    const id = req.params.id
    let restaurant = Restaurant.find({_id: id})
    if (!restaurant) {
        res.status(400).json({msg: 'No restaurant record found'})
    }
    const reviews = await restaurant.select('reviews')
    res.status(200).json({reviews: reviews[0].reviews})
}

const createReview = async (req, res) => {
    const id = req.params.id
    const review = await ReviewModel.create(req.body)
    let restaurant = await Restaurant.findOneAndUpdate({_id: id},
        {$push: {reviews: review}},
        {
            new: true,
            runValidators: true
        }
    )
    if (!restaurant) {
        res.status(400).json({msg: 'No restaurant record found'})
    }
    res.status(200).json({reviews: restaurant.reviews,
                    msg: 'Added review successfully'})
}

module.exports = {
    getReview,
    createReview
}