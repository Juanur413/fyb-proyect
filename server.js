const express = require('express')
const app = express()

//importar conexión mongodb

const archivoBd = require('./conexion')

//importar archivo rutas y modelo usuario

const rutausuario = require('./rutas/usuario')

//importar bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario',rutausuario)

app.get('/',(req,res)=>{
    res.end('Bienvenidos al servidor backend node.js')
})


app.listen(5000, function(){
    console.log("el servidor esta corriendo correctamente")
})