const express = require('express');
const mongoose = require('mongoose');
const api = require('./routes/api');
const Aroutes = require('./routes/Aroutes');
const Hroutes = require('./routes/Hroutes');
const Troutes = require('./routes/Troutes');

const bodyParser=require('body-parser');
const app = express();

 //CORS
var cors = require('cors')
app.use(cors())
app.get('/products/:id', function (req, res, next) {
res.json({msg: 'This is CORS-enabled for all origins!'})
})
 



app.use(bodyParser.json());
// initilize routes
app.use('/api', api);
app.use('/api', Aroutes);
app.use('/api', Hroutes);
app.use('/api', Troutes);

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