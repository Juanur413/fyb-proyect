const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    email: String,
    password: String,
    idusuario: String
})

const eschemaBlogs = new eschema({
    title: String,
    propietario: String,
    texto: String,
    img: String,
})

const ModeloBlog = mongoose.model('blogs',eschemaBlogs)
const ModeloUsuario = mongoose.model('usuarios',eschemausuario)
module.exports = router

/*router.get('/ejemplo',(req,res)=>{
    res.end('saludo carga desde ruta ejemplo')
})*/
router.post('/agregarblog',(req,res)=>{
    const nuevoblog = new ModeloBlog({
        title: req.body.title,
        propietario: req.body.propietario,
        texto: req.body.texto,
        img: req.body.img
    })
    nuevoblog.save(function(err){
        if(!err){
            res.send("Subido correctamente a la BD")
        }else{
            res.send(err)
        }
    })
})

router.post('/blogspublicados', async (req,res)=>{
    let blogsSegunUser = await ModeloBlog.find({propietario:req.body.propietario});
    res.send(blogsSegunUser);
})

router.get('/totalblogs', async (req,res)=>{
    let blog = await ModeloBlog.find();
    res.send(blog);
})
router.post('/agregarusuario',(req,res)=>{
    if(req.body.email && req.body.password){
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
    }
    else{
        res.send("");
    }
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


router.post('/editarblog',async(req,res)=>{
    const blog = await ModeloBlog.updateOne({_id:req.body.id},{tittle:req.body.title,propietario:req.body.propietario,texto:req.body.texto,img:req.body.img})
    res.send("Cambio realizado con exito");
})

router.post('/eliminarBlog',async(req,res)=>{
    const blog = await ModeloBlog.deleteOne({_id:req.body.id});
})