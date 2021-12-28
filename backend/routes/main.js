const express = require('express')
const router = express.Router()
const {
    getAllRestaurants,
    getOneRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
} = require('../controllers/main')

const reviewRouter = require('./review')

router.route('/')
            .get(getAllRestaurants)
            .post(createRestaurant)

router.route('/:id')
            .get(getOneRestaurant)
            .put(updateRestaurant)
            .delete(deleteRestaurant)

router.use('/review', reviewRouter)

module.exports = router