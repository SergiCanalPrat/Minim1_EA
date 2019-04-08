'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

//esquema de bike
const BikesSchema  = new Schema({
    bike: {type: String, unique: true},
    kms: Number, 
    description: [String]

})
/*  //encriptacion de datos 
BikesSchema.pre('save', (next) => {
    let bike = this
    bcrypt.genSalt(10, (err, salt)=> {
        if (err) return next(err)
        bcrypt.hash(bike.name, salt, null, (err, hash) => {
            bike.name
            next()
        })
    })
})
*/
module.exports = mongoose.model('bikes', BikesSchema)