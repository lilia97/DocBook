const express = require('express')
const router = express.Router()
const Transactions = require('../models/transactions.js')


// get list
router.get('/transactions', function (req, res) {
    Transactions.find({}).then(function(transaction, err) {
    if (err) throw err;
    res.send(transaction)
  });});

// insert
router.post('/transactions', function (req, res) {
    Transactions.create({ 
      First_name: req.body.First_name,
      Last_name: req.body.Last_name,
      booking_date: Date.now(),
      reference: req.body.reference, 
      Dr: req.body.Dr,
      specialty: req.body.specialty,
      appointment: req.body.appointment,
      hospital: req.body.hospital,
    
    }).then(function(transaction, err){
      if (err){
        res.json({message: 'error', error: err})
      }
      res.json({message: 'success', transaction: transaction})
    });});

// update
  router.put('/transactions/:id', function (req, res) {
    Transactions.findByIdAndUpdate({_id: req.params.id}).then(function(transaction){
      transaction.First_name =  req.body.First_name;
      transaction.save(transaction);
      res.send(transaction);
  });
});

// delete
  router.delete('/transactions/:id', function (req, res) {
    Transactions.findByIdAndRemove({_id: req.params.id}).then(function(transaction){
      res.send(transaction)
    });
  });
module.exports = router
