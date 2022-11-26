import React, { useState } from "react";
import uniquid from 'uniqid'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import './register.css';

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    function agregarUsuario(){
        let usuario ={
            email:email,
            password:password,
            name: name,
            idusuario:uniquid()  
        }
        axios.post('/api/usuario/agregarusuario',usuario)
        .then(res=>{
            //aca pueden poner a donde ir despues de un login correcto navigate()
            res.data!=="" ? navigate('/login') : alert("Error en el registro");
        })
        .then(err=>{console.log(err)})
    }
    
    return (
        <div className="nueva-publicacion">

            <div id="formulario" className="card mx-auto mb-3 mt-5">
                <div id="card-header" className="card-header text-dark">
                    <h4>Registrarse</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>



                        <div className="mb-3">
                            <label>Email</label>
                            <input className="form-control" placeholder="Ingrese su cuenta de correo electrónico" type="email" id="title" name="title" onChange={(e) => setEmail(e.target.value)} required/>

                        </div>
                        <div className="mb-3">
                            <label>Contraseña</label>
                            <input className="form-control" placeholder="Ingrese su nueva contraseña" type="password" id="author" name="author" onChange={(e) => setPassword(e.target.value)} required/>
                        </div>

                        <div className="mb-3">
                            <label>Nombre de Usuario</label>
                            <input className="form-control" placeholder="Este será su nombre al publicar" type="name" id="name" name="title" onChange={(e) => setName(e.target.value)} required/>

                        </div>

                        <button type="submit" onClick={agregarUsuario} className="btn btn-primary mb-3 ">Registrarse</button>
                        <div>
                        <label>¿Ya tienes una cuenta?</label>
                        <Link to="/" className="nav-link" >Inicia sesión<span className="sr-only"></span></Link>

                        </div>

                    </form>

                </div>
            </div>
        </div>
                );
}

export default Register