'use strict'

const Station = require('../modelos/station')
const Bike = require('../modelos/bike')

//funciones
//listado de bikes
function getStations(req, res) {
    Station.find({ }, (err, stations) => {
        if (err) return res.status(500).send( `Error al realizar la petición a ala base de datos: ${err} `)
        if (!stations) return res.status(404).send('No hay stations')
        res.status(200).send(stations)
    })
}

//listado de stations con bikes
function getStationsconbikes(req, res) {
    //busca todos las bikes, claudator vacio
    Station.find({ }, (err, stationsconbikes) => {
      Bike.populate(stationsconbikes, {path: "bike"}, (err, stationsconbikes) =>{
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!stationsconbikes) return res.status(404).send({message: 'No existen stations en la bbdd'})
        //se envia una respuesta en res, la respuesta sera un json de producto
        console.log(stationsconbikes)
        //res.send(200, { userList })
        res.status(200).send(stationsconbikes)
      })

    })
  }

//guardar stations
function saveStation (req, res){
    let station = new Station({
        name: req.body.name
    });
    console.log(station)
    station.save((err, station) => {
        console.log(station)
        console.log(err)
        if (err) res.status(500).send({mensaje: `Error al guardar en la base de datos ${err}`})
        
        return res.status(200).send({station: station})
    })   
}


//detalle de las stations una por una
function getStation(req, res) {
    let stationId = req.params.stationId
    Station.findById(stationId,(err, station) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!station) return res.status(404).send(`La station no existe`)
        res.status(200).send({ station })
    })
}

//ver bike que pertenece a una station
function getBike(req, res) {
    let bikeId = req.params.bikeId
    Station.findById(bikeId, (err,bike) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!bike) return res.status(404).send(`bike no esta en la estacion`)
        res.status(200).send({bike})
    })
}

//listar bikes de una estación
function getBikesdeStation(req, res) {
    let stationId = req.params.stationId

    Station.findById({_id: stationId}, (err, result) => {
        console.log(result.bikes)
        //console.log(bikes)
        if(err) return res.status(500).send(`Error al realizar la petición: ${err} `)
    
        return res.status(200).send(result.bikes)
        /*var arraydeIds = result.bikes
        console.log(arraydeIds)
        arraydeIds.forEach(element => {
            console.log(element)
            Bike.findById({_id: element}, (err, bikes) => {
                if(err) return res.status(500).send(`Error al realizar la petición: ${err} `)
                
                return res.status(200).send(element)
            })
        });*/
        //Bike.findById({_id: result.bikes}, (err, bikes) => {

        //})
    })
}

//añadir un bike (ya existente) a una station
function addBike (req, res) {
    let stationId = req.params.stationId
    console.log(req.params.stationId)
    let bikeId = req.params.stationId
    console.log(req.params.bikeId)

    Station.update({_id: stationId}, {"$push": {"bikes": bikeId}}, (err, result) => {
        console.log(result)
        if(err) res.status(500).send(`Error al actualizar la station: ${err}`)
        if(!result) return res.status(404).send('La station no esta en la bbdd')

        res.status(200).send(result)
    })

}

module.exports = {
    getStationsconbikes,
    saveStation: saveStation,
    getStation: getStations,
    getStation: getStation,
    getBikes: getBike,
    getBikesdeStation,
    addBike: addBike
}