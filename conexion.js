<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.igodnqb.mongodb.net/?retryWrites=true&w=majority/crudmernstack');

const objetodb = mongoose.connection

objetodb.on('connected',() => { console.log("conexión correcta a mongoDB") })
objetodb.on('error',() => { console.log("Error en la conexión a mongodb") })

module.exports = mongoose

=======
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.igodnqb.mongodb.net/?retryWrites=true&w=majority/crudmernstack');

const objetodb = mongoose.connection

objetodb.on('connected',() => { console.log("conexión correcta a mongoDB") })
objetodb.on('error',() => { console.log("Error en la conexión a mongodb") })

module.exports = mongoose
>>>>>>> 4eb0dfa76ac7b0cadcb33dd0aff85cec6a908d97
