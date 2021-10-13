const express = require('express')
const router = express.Router()
const Service = require('../models/services')

router.get('/services', (req, res) => {
    res.send("That's our services")
})

router.post('/services', (req, res) => {
    const service = req.body
    Service.create(service, res)
    // res.status(200).send(JSON.stringify(req.body))
})

module.exports = router