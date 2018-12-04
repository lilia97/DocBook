const express = require('express')
const router = express.Router()
const Availability = '../models/availability.js'


// get list
router.get('/availability', function (req, res) {
  Availability.find({}).then(function(availability, err) {
    if (err) throw err;
    res.send(availability)
  });
});

// insert
router.post('/availability', function (req, res) {
  Availability.create({ 
    Dr_name: req.body.Dr_name,
    Time1: '9h',
    Time2: '9h30',
    Time3: '10h',
    Time4: '10h30',
    Time5: '11h',
    Time6: '11h30',
    Time7: '12h',
    Time8: '14h',
    Time9: '14h30',
    Time10: '15h',
    Time11: '15h30',
    Time12: '16h',
    Time12: '16h30',

  }).then(function(availability, err){
    if (err){
      res.json({message: 'error', error: err})
    }
    res.json({message: 'success', availability: availability})
  });});

// update
router.put('/availibility/:id', function (req, res) {
  Availability.findByIdAndUpdate({_id: req.params.id}).then(function(availability){
    availability.Time1 =  req.body.Time1;
    availability.Time2 =  req.body.Time2;
    availability.Time3 =  req.body.Time3;
    availability.Time4 =  req.body.Time4;
    availability.Time5 =  req.body.Time5;
    availability.Time6 =  req.body.Time6;
    availability.Time7 =  req.body.Time7;
    availability.Time8 =  req.body.Time8;
    availability.Time9 =  req.body.Time9;
    availability.Time10 =  req.body.Time10;
    availability.Time11 =  req.body.Time11;
    availability.Time12 =  req.body.Time12; 
    availability.Time13 =  req.body.Time12; 

    availability.save(availability);
    res.send(availability);
});
});

// delete
  router.delete('/availability/:id', function (req, res) {
    Availability.findByIdAndRemove({_id: req.params.id}).then(function(availability){
      res.send(availability)
  
    });
  });

module.exports = router
