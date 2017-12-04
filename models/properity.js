const mongoose = require('mongoose');
const config = require('../config/database');

// Prop Schema
const PropSchema = mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    squareMeter: {
        type: String,
        required: true
    },
    monthlyRent: {
        type: String,
        required: true
    },
    rooms: {
        type: String,
        required: true
    },
    partners: {
        type: String,
        required: true
    },
    homeCondition: {
        type: String,
        required: true
    },
    homeDesign: {
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    animals: {
        type: String,
        required: true
    },
    elevator: {
        type: String,
        required: true
    },
    parking: {
        type: String,
        required: true
    },
    garage: {
        type: String,
        required: true
    },
    grate: {
        type: String,
        required: true
    },
    airCon: {
        type: String,
        required: true
    },
    cripple: {
        type: String,
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



