const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Prop = require('../models/properity');
const mongojs = require('mongojs');
const db = mongojs('mongodb://nati:123@ds129706.mlab.com:29706/meanauthapp');

router.post('/property', (req,res,next) =>{
    let newProp = new Prop({
        area: req.body.area,
        address: req.body.address,
        squareMeter: req.body.squareMeter,
        monthlyRent: req.body.monthlyRent,
        rooms: req.body.rooms,
        partners: req.body.partners,
        homeCondition: req.body.homeCondition,
        homeDesign: req.body.homeDesign,
        floor: req.body.floor,
        animals: req.body.animals,
        elevator: req.body.elevator,
        parking: req.body.parking,
        garage: req.body.garage,
        grate: req.body.grate,
        airCon: req.body.airCon,
        cripple: req.body.cripple
    });

    console.log('The address is: ' + newProp.address);

    Prop.getPropByAddress(newProp.address, (error, prop)=>{

        // Throw error if any
        if(error) throw error;

        console.log('the address is '+newProp.address);
        // address not found
        if(!prop){
            console.log('New address');
            Prop.addProp(newProp, (err, prop)=>{
                if(err){
                    res.json({
                        success: false,
                        message: 'Failed to add new property'
                    });
                }
                else{
                    res.json({
                        success: true,
                        message: 'successfully added new property'
                    });
                }
            });
        }
        // address is found - address already exists
        else{
            console.log('This address is already exists');
            res.json({
                success: false,
                message: 'address already in use'
            });
        }
    });
});

// Get all properties
router.get('/properties', function (req, res, next) {
   db.props.find(function (err, properties) {
        if (err){
            res.send(err);
        }
        res.json(properties);
    })
});

//Get Single property
router.get('/property/:id', function(req, res, next){
    db.props.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, property){
        if(err){
            res.send(err);
        }
        res.json(property);
    });
});

// Delete property
router.delete('/property/:id', function(req, res, next){
    db.props.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, property){
        if(err){
            res.send(err);
        }
        res.json(property);
    });
});

// Update Property
router.put('/property/:id', function(req, res, next){
    const prop = req.body;
    const updProp = {};

    if(prop.area){
        updProp.area = prop.area;
    }

    if(prop.address){
        updProp.address = prop.address;
    }

    if(prop.squareMeter){
        updProp.squareMeter = prop.squareMeter;
    }

    if(prop.monthlyRent){
        updProp.monthlyRent = prop.monthlyRent;
    }

    if(prop.rooms){
        updProp.rooms = prop.rooms;
    }

    if(prop.partners){
        updProp.partners = prop.partners;
    }

    if(prop.homeCondition){
        updProp.homeCondition = prop.homeCondition;
    }

    if(prop.homeDesign){
        updProp.homeDesign = prop.homeDesign;
    }

    if(prop.floor){
        updProp.floor = prop.floor;
    }

    if(prop.animals){
        updProp.animals = prop.animals;
    }

    if(prop.elevator){
        updProp.elevator = prop.elevator;
    }

    if(prop.parking){
        updProp.parking = prop.parking;
    }

    if(prop.garage){
        updProp.garage = prop.garage;
    }

    if(prop.grate){
        updProp.grate = prop.grate;
    }

    if(prop.airCon){
        updProp.airCon = prop.airCon;
    }

    if(prop.cripple){
        updProp.cripple = prop.cripple;
    }

    if(!updProp){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.props.update({_id: mongojs.ObjectId(req.params.id)},updProp, {}, function(err, property){
            if(err){
                res.send(err);
            }
            res.json(property);
        });
    }
});

module.exports = router;