'use strict'
const mongoose = require('mongoose')
const bikesSchema = require('./bikes').schema
const Schema = mongoose.Schema

//esquema de bikes 
const StationsSchema = new Schema({
    name: {type: String,unique: true},
    bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
    //bikes: [bikesSchema]
})


module.exports = mongoose.model('Stations', StationsSchema)