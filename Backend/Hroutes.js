const express = require('express')
const router = express.Router()
const Hospitals = require('../models/hospitals.js')

// get list
router.get('/hospitals', function (req, res) {
    Hospitals.find({}).then(function(hospital, err) {
    if (err) throw err;
    res.send(hospital)
  });
});
// insert
router.post('/hospitals', function (req, res) {
  Hospitals.create({ 
    name: req.body.name,
    address: req.body.address,
  
  }).then(function(hospital, err){
    if (err){
      res.json({message: 'error', error: err})
    }
    res.json({message: 'success', hospital: hospital})
  });});

// delete
  router.delete('/hospitals/:id', function (req, res) {
    Hospitals.findByIdAndRemove({_id: req.params.id}).then(function(hospital){
      res.send(hospital)

    });
  });


module.exports = router