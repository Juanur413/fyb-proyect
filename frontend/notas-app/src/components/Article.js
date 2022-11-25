import React from 'react';
import './article.css';

const Article = ({ id, articleData, delArticle }) => {

    const { title, texto, propietario, img  } = articleData;

    //const formatDate = (date) => {
       // return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);}

    const del = () => {
        delArticle(id);

    }


    return (
        <div className="col">
        <div className="card mx-auto mb-3">

            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>

            <div className="card-body">
                <image className='imagenArticulo'>{img}</image>
                <label className="card-text text-start">{texto}</label>
            </div>

            <ul className="list-group list-group-flush">
                
                <li className=" list-pub list-group-item" style={{ 'fontSize': 12 }}>Autor: {propietario}</li>
            </ul>

            <div className="card-footer">
                <button type="button" className="btnEliminar btn-danger btn-sm" onClick={del}>
                    Eliminar
                </button>
                <button type="button" className="btnEditar btn-primary btn-sm" onClick={del}>
                    Editar
                </button>
            </div>
        </div>
        </div>

    );

}

export default Article;