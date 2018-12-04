const express = require('express');
const mongoose = require('mongoose');
const api = require('./routes/api');
const bodyParser=require('body-parser');
const app = express();

/* //CORS
var express = require('express')
var cors = require('cors')
var app = express()
 */


app.use(bodyParser.json());
// initilize routes
app.use('/api', api);
// error handling middelware
app.use(function(err,req,res,next){
 //consol.log (err); 
 res.status(422).send({error: err.message});
});


mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/docbookdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.listen( 3000, ()=>{
    console.log('App is listening on port 3000')
})