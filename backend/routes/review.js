const express = require('express')
const { getReview, createReview } = require('../controllers/review')
const router = express.Router()

router.route('/:id').get(getReview).post(createReview)

module.exports = router