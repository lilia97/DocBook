const mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var AvailabilitySchema = new Schema({
    Dr_name: String,
    Time1: String,
    Time2: String,
    Time3: String,
    Time4: String,
    Time5: String,
    Time6: String,
    Time7: String,
    Time8: String,
    Time9: String,
    Time10: String,
    Time11: String,
    Time12: String,
    Time13: String,

});

// Compile model from schema
var AvailabilityModel = mongoose.model('AvailabilityModel', AvailabilitySchema );
module.exports = AvailabilityModel;