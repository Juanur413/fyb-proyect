import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate(); 
    const handleSubmit= e=>{
        e.preventDefault();
    }
    function ingresarUsuario(){
        let usuario={
            email:email,
            password:password
        }
        axios.post('/api/usuario/obtenerusuario',usuario)
        .then(res=>{
            console.log(res);
            //aca pueden poner a donde ir despues de un login correcto navigate()
            res.data.length >0 ? navigate('/articles') : alert("inicio de sesión erroneo");
        })

    
    }

    return (
        <div className="nueva-publicacion">
            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                <div id="card-header" className="card-header text-dark">
                    <h4>Iniciar sesión</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Email</label>
                            <input className="form-control" placeholder="Ingrese su cuenta de correo electrónico" type="email" id="title" name="title" onChange={(e) => setEmail(e.target.value)}/>

                        </div>
                        <div className="mb-3">
                            <label>Contraseña</label>
                            <input className="form-control" placeholder="Ingrese su contraseña" type="password" id="author" name="author" onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <button onClick={ingresarUsuario} type="submit" className="btn btn-primary mb-3">Ingresar</button>
                        <div>
                        <label>¿Todavía no tienes una cuenta?</label>
                        <Link to="/register" className="nav-link" >Registrate<span className="sr-only"></span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                );
}

export default Login