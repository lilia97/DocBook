const mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var DoctorsSchema = new Schema({
    name: String,
    room_number: String,
    floor: String,
    availibity: String,
    Hospital:String,
    Speaciality:String,
});

// Compile model from schema
var DoctorsModel = mongoose.model('DoctorsModel', DoctorsSchema );

module.exports = DoctorsModel;