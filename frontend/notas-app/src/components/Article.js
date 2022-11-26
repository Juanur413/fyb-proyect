import React from 'react';
import './article.css';
import {Link} from 'react-router-dom';

const Article = ({ id, articleData, delArticle,editArticle }) => {
    
    const { title, texto, propietario, img  } = articleData;
    //const formatDate = (date) => {
       // return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);}

    const del = () => {
        delArticle(id);
    }
    const edit = ()=>{
        editArticle(id)
    }

    return (
        <div className="col">
        <div className="card mx-auto mb-3">

            <div className="card-header">
                <img className='imagenArticulo' src={img} alt="Not working"></img>
            </div>

            <div className="card-body">
                <h1 className="card-title">{title}</h1>
                <p className="card-text text-start">{texto}</p>
                <h4 className='autor'>Autor: {propietario} </h4>
            </div>

            <div className="card-footer">
                <button type="button" className="btnEliminar btn-danger btn-sm" onClick={del}>
                    Eliminar
                </button>
                    <Link to={`/Edit/${id}`}>
                <button type="button" className="btnEditar btn-primary btn-sm" onClick={edit}>
                    Editar
                </button>
                    </Link>
            </div>
        </div>
        </div>

    );

}

export default Article;