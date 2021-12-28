const errorHandler = (err, req, res, next) => {
    console.log(err)
    res.send(500).json({msg: 'Sorry! Something went wrong'})
}

module.exports = errorHandler