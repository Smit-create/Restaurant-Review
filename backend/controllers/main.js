const Restaurant = require('../models/restaurant')

const getAllRestaurants = async (req, res) => {
    const result = await Restaurant.find({})
    if (!result) {
        res.status(400).json({msg: 'No restaurants record found'})
    }
    res.status(200).json({restaurants: result})
}

const getOneRestaurant = async (req, res) => {
    const {id} = req.params
    const restaurant = await Restaurant.findOne({_id: id})
    if (!restaurant) {
        res.status(400).json({msg: 'No restaurant record found'})
    }
    res.status(200).json({restaurant})
}

const createRestaurant = async (req, res) => {
    const restaurant = await Restaurant.create(req.body)
    if (!restaurant) {
        res.status(400).json({msg: 'Unable to create a restaurant'})
    }
    res.status(201).json({restaurant,
                        msg: 'Created Successfully'})
}

const updateRestaurant = async (req, res) => {
    const {id} = req.params
    const restaurant = await Restaurant.findOneAndUpdate(
        {_id: id},
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
    if (!restaurant) {
        res.status(400).json({msg: 'Unable to update'})
    }
    res.status(200).json({restaurant, msg: 'Updated Successfully'})
}

const deleteRestaurant = async (req, res) => {
    const {id} = req.params
    const restaurant = await Restaurant.findOneAndDelete(
        {_id: id},
    )
    if (!restaurant) {
        res.status(400).json({msg: 'Unable to delete'})
    }
    res.status(200).json({restaurant, msg: 'Deleted Successfully'})
}

module.exports = {
    getAllRestaurants,
    getOneRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}