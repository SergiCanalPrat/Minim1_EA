'use strict'

const express = require('express')
const stationCtrl = require('../controller/station')
const bikeCtrl = require('../controller/bike')
const api = express.Router()


//STATION: http://localhost:3000/api/
//crear station - FUNCIONA
api.post('/station/nueva', stationCtrl.saveStation)
//listado de stations - FUNCIONA
api.get('/station/stationsList', stationCtrl.getStations)
//detalle station - FUNCIONA
api.get('/station/:stationId', stationCtrl.getStationById)


//Bikes: http://localhost:3000/api/
api.post('/bike/nuevo', bikeCtrl.saveBike)
api.get('/bike/getBikes', bikeCtrl.getBikes)
api.get('/bike/:bikeId', bikeCtrl.getBikeById)
api.put('/bike/modificar/:bikeId', bikeCtrl.updateBike)
api.delete('/bike/eliminar/:bikeId', bikeCtrl.deleteBike)

api.put('/relacion/:stationId/:bikeId', stationCtrl.addBikeToStation)
api.get('/relacion/listaStations', stationCtrl.getStationsWithBikes)
api.get('/relacion/getBikes/:stationId', stationCtrl.getBikesOfStation)



module.exports = api;