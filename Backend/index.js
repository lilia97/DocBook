const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const Aroutes = require('./routes/Aroutes.js');
const Hroutes = require('./routes/Hroutes.js');
const Troutes = require('./routes/Troutes.js');
const cors = require('cors')
const app = express();
app.use(cors())
 
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/docbookdb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
//app.use('/Aroutes',Aroutes);
app.use('/Hroutes',Hroutes);
app.use('/Troutes',Troutes);

app.get('/', (req,res)=>{
    res.send('Hello World')
});
app.get('/Docbook', (req,res)=>{
    res.send('This is docbook')
})

app.listen(3000, ()=>{
    console.log('App is listening on port 3000')
})