const express = require('express');
const router = express.Router();
const Doctors = require('../models/doctors');
  
//post a list of doctors from database
router.post('/doctors',function(req,res,next){
  Doctors.create(req.body).then(function(doctors){
    res.send(doctors);
  });
})

// add a new doctor to the database
router.get('/doctors/:id',function(req,res,next){
  Doctors.findById({_id: req.params.id}).then(function(doctors){
    res.send(doctors);
  })
  //res.send(doctors);
});  

// update       
router.put('/doctors/:id',function(req,res,next){
  Doctors.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
    Doctors.finOne({_id: req.params.id}).then(function(doctors){
      res.send(doctors);
    })
  })
})



// delete
router.delete('/doctors/:id',function(req,res,next){
  Doctors.findByIdAndRemove({_id: req.params.id}).then(function(doctors){
    res.send(doctors);
  });
})



module.exports = router;