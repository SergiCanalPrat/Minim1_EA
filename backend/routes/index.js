'use strict'

const express = require('express')
const stationCtrl = require('../controller/station')
const bikeCtrl = require('../controller/bike')
const api = express.Router()


//STATION: http://localhost:3000/api/
api.post('/station/new', stationCtrl.saveStation)
api.get('/station/:stationId', stationCtrl.getStationById)

api.get('/station', stationCtrl.getEstacions)


//Bikes: http://localhost:3000/api/
api.post('/bike/new', bikeCtrl.saveBike)
api.get('/bike/getBikes', bikeCtrl.getBikes)
//api.get('/bike/:bikeId', bikeCtrl.getBikeById)
api.get('/bike/getBikeById/:bikeId', bikeCtrl.getBiciletesPerId)
//api.put('/bike/modificar/:bikeId', bikeCtrl.updateBike)
api.delete('/bike/eliminar/:bikeId', bikeCtrl.deleteBike)

//api.put('/relacion/:stationId/:bikeId', stationCtrl.addBikeToStation)
//api.get('/relacion/getStations', stationCtrl.getStations)
//api.get('/relacion/getBikes/:stationId', stationCtrl.getBikesOfStation)



module.exports = api;