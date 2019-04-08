'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

//esquema de bike
const BikesSchema  = new Schema({
    name: {type: String, unique: true, required: true},
    kms: Number, 
    description: [String]
})

module.exports = mongoose.model('bike', BikesSchema)