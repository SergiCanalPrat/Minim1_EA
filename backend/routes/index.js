'use strict'

const express = require('express')
const stationCtrl = require('../controller/stations')
const bikeCtrl = require('../controller/bikes')
const api = express.Router()


//Stations: http://localhost:3000/api/station
//crear station - FUNCIONA
api.post('/stations/nueva', stationCtrl.saveStation)
//listado de stations - FUNCIONA
api.get('/stations/listaStation', stationCtrl.getStations)
//detalle stations - FUNCIONA
api.get('/stations/:stationId', stationCtrl.getStation)
//modificar station
//----
//eliminar station
//----


//BIKES: http://localhost:3000/api/bike
// crear bike - FUNCIONA
api.post('/bike/nuevo', bikeCtrl.saveBike)
//listar bikes - FUNCIONA
api.get('/bike/listaBikes', bikeCtrl.listarBikes)
//detalle bike - FUNCIONA
api.get('/bike/:bikeId', bikeCtrl.getBikebyId)
//modificar bike - FUNCIONA
api.put('/bike/modificar/:bikeId', bikeCtrl.updateBike)
//eliminar bike - FUNCIONA
api.delete('/bike/:bikeId', bikeCtrl.deleteBike)



//STATIONS AND BIKES: http://localhost:3000/api/relation
// añadir bike a station - FUNCIONA
api.put('/relacion/:stationId/:bikeId', stationCtrl.addBike)
//listado stations con bikes
api.get('/relacion/listaStationsConBikes', stationCtrl.getStationsconbikes)
//listas bikes de una station
api.get('/relacion/listaBikes/:stationId', stationCtrl.getBikedeStation)
//detalle bike de una station -- FUNCIONA
api.get('/relacion/bikeDeStation/:bikeId', stationCtrl.getbike)


module.exports = api;