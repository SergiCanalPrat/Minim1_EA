'use strict'
const mongoose = require('mongoose')
const bikesSchema = require('./bike').schema
const Schema = mongoose.Schema

//esquema de bikes 
const StationSchema = new Schema({
    station: {type: String,unique: true},
    state: String,
    description: String,
    bikes: [bikesSchema]
})


module.exports = mongoose.model('Stations', StationSchema)