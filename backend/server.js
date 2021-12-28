require('dotenv').config()
require('express-async-errors')


const express = require('express')
const app = express()
const mainRouter = require('./routes/main')
const port = process.env.PORT || 3000
const notFoundError = require('./error/notfound')
const errorHandler = require('./error/errorHandler')
const connectDB = require('./db/connect')

// middlewares
app.use(express.json())

// routes
/*
1. '/', get all/create one
2. '/:id', get/update/delete one restaurant
3. '/review/:id', get/post review one restuarant
*/

app.use('/api/v1/restaurants', mainRouter)

app.use(notFoundError)
app.use(errorHandler)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,
            console.log(`Server is listening at port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()