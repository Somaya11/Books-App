const Flight = require('../models/flight')


module.exports = {
    new: newFlight,
    create,
    index,
    show

}

function newFlight(req, res){
    res.render('flights/new')
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      
      if (err) { 
          console.log(err)
          return res.send(err);
        }
      console.log(flight);
   
      res.redirect('/flights/new');
    });
  }

  function index(req,res){
      Flight.find({}, function(err, flights){
          console.log(flights)
          res.render('flights/index', {flights})
      })
  }


  function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        res.render("flights/show", { flight });
      });
  }