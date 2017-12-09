const mongoose = require('mongoose');
const config = require('../config/database');

// Prop Schema
const PropSchema = mongoose.Schema({
    area: { //Should be a scroll bar - 1. Tzafon yashan 2. Center 3. Lev 4. Kerem 5. Neve Tzedek 6. Florentin 7, Jaffa-north (Can choose only one)
        type: String,
        required: true
    },
    address: { //insert full address like (Jabotinsky 133, Tel-Aviv)
        type: String,
        required: true
    },
    squareMeter: { //insert square meter of the house
        type: String,
        required: true
    },
    monthlyRent: { // insert monthly rent by ILS
        type: String,
        required: true
    },
    rooms: { // insert number of rooms
        type: String,
        required: true
    },
    partners: { // checkbox if the property is suitable for partners
        type: Boolean,
        required: true
    },
    homeCondition: {  //scroll bar with 4 parameters - Renovation needed/well-kept/renovated/new (can choose only one)
        type: String,
        required: true
    },
    homeDesign: { //scroll bar with 4 parameters - Balcony / roof / garden (can choose only one)
        type: String,
        required: true
    },
    floor: { // option to insert floors
        type: String,
        required: true
    },
    animals: { //checkbox
        type: Boolean,
        required: true
    },
    elevator: { //checkbox
        type: Boolean,
        required: true
    },
    parking: { //checkbox
        type: Boolean,
        required: true
    },
    garage: { //checkbox
        type: Boolean,
        required: true
    },
    grate: { //checkbox
        type: Boolean,
        required: true
    },
    airCon: { //checkbox
        type: Boolean,
        required: true
    },
    cripple: { //checkbox
        type: Boolean,
        required: true
    }
});

const Prop = module.exports = mongoose.model('Prop', PropSchema);

module.exports.getPropById = function(id, callback){
    Prop.findById(id, callback);
};

module.exports.getPropByAddress = function(address, callback){
    const query = {address: address};
    Prop.findOne(query, callback);
};

module.exports.addProp = function(newProp, callback){
    newProp.save(callback);
};



