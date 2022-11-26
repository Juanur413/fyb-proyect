const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetodb = mongoose.connection

objetodb.on('connected',() => { console.log("conexión correcta a mongoDB") })
objetodb.on('error',() => { console.log("Error en la conexión a mongodb") })

module.exports = mongoose