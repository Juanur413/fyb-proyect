const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    email: String,
    password: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios',eschemausuario)
module.exports = router

/*router.get('/ejemplo',(req,res)=>{
    res.end('saludo carga desde ruta ejemplo')
})*/
router.post('/agregarusuario',(req,res)=>{
    const nuevousuario = new ModeloUsuario({
        email:req.body.email,
        password: req.body.password,
        idusuario:req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send(true)
        }else{
            res.send(err)
        }
    })
})

//obtener usuario
router.post('/obtenerusuario',(req,res)=>{
    ModeloUsuario.find({email:req.body.email,password:req.body.password},function(docs,err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})