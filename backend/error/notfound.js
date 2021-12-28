const notFoundError = (req, res) => {
    res.status(500).send('Route does not exit')
}

module.exports = notFoundError