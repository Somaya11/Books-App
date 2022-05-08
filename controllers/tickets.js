const Ticket = require('../models/ticket')
const Flight = require('../models/flight')
const mongoose = require('mongoose')

module.exports = {
    new: newTicket,
}


function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {flight})
    })
}