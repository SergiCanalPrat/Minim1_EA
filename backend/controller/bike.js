'use strict'
const Bike = require('../modelos/bike')

//funciones
function getBikes(req, res) {
    //busca todos los usuarios, claudator vacio
    Bike.find({}, (err, bikes) => { //l'array de productes no m'ho dona
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!bikes) return res.status(404).send({message: 'No existen bikes en la bbdd'})
        
        console.log(bikes)
        res.status(200).send(bikes)
    })
  }
// buscar bike por id
function getBikebyId(req, res) {
    let bikeId = req.params.bikeId
    Bike.findById(bikeId,(err, result) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!result) return res.status(404).send(`bike no existe`)
        res.status(200).send(result)
    })
}

// buscar bike por id
function getBiciletesPerId(req, res) {
    let bikeId = req.params.bikeId
    Bike.findById(bikeId,(err, result) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!result) return res.status(404).send(`bike no existe`)
        res.status(200).send(result)
    })
}


//crear un nuevo bike
function saveBike (req,res){
    console.log(req.body);

    let bike3 = new Bike( {
        name: req.body.name,
        kms: req.body.kms,
        description: req.body.description
    });
    console.log('la bici es'+bike3)
    bike3.save( (err, bike4) => {
        console.log(bike4)
        if (err) res.status(500).send({mensaje: 'Error al guardar en la base de datos ${err}'})
        res.status(200).send({bike4})
    })   
}

//modificar bike
function updateBike (req, res){
    let bikeId = req.params.bikeId
    let update = req.body
    Bike.findByIdAndUpdate(bikeId, update, (err, bike) => {
        if (err) res.status(500).send(`Error al actualizarlo: ${err}`)
        if (!bike) return res.status(404).send({message: 'La station no existe'})

        res.status(200).send(bike)
    })
}

//eliminar bike
function deleteBike (req, res){
    let bikeId = req.params.bikeId
    Bike.findById(bikeId, (err, bike) => {
        if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
    
        bike.remove(err => {
            if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
            
            res.status(200).send( `bike eliminada`)
        })
    
    })

}

module.exports = {
    getBikes,
    saveBike,
    getBikebyId,
    updateBike,
    deleteBike,
    getBiciletesPerId
}