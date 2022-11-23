import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const New = () => {

    const [article, setArticle] = useState({
        title: null,
        texto: null,
        propietario: null,
        img: null

    });

    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario:
    let titleRef = React.createRef();
    let contentRef = React.createRef();
    let authorRef = React.createRef();
    let imgRef = React.createRef();

    const changeState = () => {
        setArticle({
            title: titleRef.current.value,
            texto: contentRef.current.value,
            propietario: authorRef.current.value,
            img: imgRef.current.value
        });
    }

    const sendData = (e) => {
        //Evitamos que al recibir los datos se recargue la pantalla:
        e.preventDefault();
        changeState();
        //Petición http por POST para guardar el artículo:
        axios.post('/api/usuario/agregarblog',article)
        .then(res=>{
            console.log(res)
            //setRedirect(true);
        })
        .then(err=>console.log(err))
    }

    //forma de obtener todos los articulos existentes
    axios.get('/api/usuario/totalblogs')
    .then(res=>{
        console.log(res.data);
    })
    //forma de obtener los articulos segun un creador
    axios.post('/api/usuario/blogspublicados',{propietario:"Ruben Urrego"})
    .then(res=>{
        console.log(res.data)
    })
    if(redirect){
        return <Navigate to="/articles" />;
    }

    return (
        <div className="nueva-publicacion">

            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                <div id="card-header" className="card-header text-dark">
                    <h4>Publicar un nuevo artículo</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={sendData}>

                        <div className="mb-3">
                            <label>Título</label>
                            <input className="form-control" placeholder="Escriba el título del artículo" type="text" id="title" name="title" ref={titleRef} onChange={changeState} required />

                        </div>

                        <div className="mb-3">
                            <label>Contenido</label>
                            <textarea className="form-control" placeholder="Escriba el contenido del artículo" rows="6" cols="30" ref={contentRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <label>Autor</label>
                            <input className="form-control" placeholder="Escriba el nombre de la persona que escribió el artículo" type="text" id="author" name="author" ref={authorRef} onChange={changeState} required />
                        </div>

                        <div class="input-group mb-3">
                             <label>Url img Adjunto</label>
                             <input type="text" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" ref={imgRef} onChange={changeState} aria-label="Upload" required/>
                        </div>

                        <div className="mb-3">
                            <input className="form-control btn btn-primary" type="submit" id="publish" value="Publicar"/>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default New;