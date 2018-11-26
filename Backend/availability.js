onst mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var AvailabititySchema = new Schema({
    
    Dr: String,
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


});

// Compile model from schema
var AvailabilityModel = mongoose.model('AvailabilityModel', AvailabilitySchema );
