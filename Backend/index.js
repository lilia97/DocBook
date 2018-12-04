const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const api = require('./routes/api');
const bodyParser=require('body-parser');
const app = express();

 //CORS
var cors = require('cors')
app.use(cors())
app.get('/products/:id', function (req, res, next) {
res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
 


app.use(bodyParser.json());
// initilize routes
app.use('/api', api);
// error handling middelware
app.use(function(err,req,res,next){
 //consol.log (err); 
 res.status(422).send({error: err.message});
});


=======
const bodyParser = require('body-parser');
//const Aroutes = require('./routes/Aroutes.js');
const Hroutes = require('./routes/Hroutes.js');
const Troutes = require('./routes/Troutes.js');
const cors = require('cors')
const app = express();
app.use(cors())
 
>>>>>>> 43f6655cc838561cce21aa769e9264f10f01e9ec
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/docbookdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

<<<<<<< HEAD

app.listen( 3000, ()=>{
=======
app.use(bodyParser.json());
//app.use('/Aroutes',Aroutes);
app.use('/api',Hroutes);
app.use('/api',Troutes);

app.get('/', (req,res)=>{
    res.send('Hello World')
});
app.get('/Docbook', (req,res)=>{
    res.send('This is docbook')
})

app.listen(3000, ()=>{
>>>>>>> 43f6655cc838561cce21aa769e9264f10f01e9ec
    console.log('App is listening on port 3000')
})