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

app.use(bodyParser.json());
// initilize routes
app.use('/api', api);
app.use('/api', Aroutes);
app.use('/api', Hroutes);
app.use('/api', Troutes);



mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/docbookdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.listen( 3000, ()=>{
    console.log('App is listening on port 3000')
})