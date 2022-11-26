import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';
import './articles.css';

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles();
        console.log(articles);
    }, [articles.length]);


    //Obtenemos los artículos

    const getArticles = () => {
        axios.get('/api/usuario/totalblogs').then(res => {
            setArticles(res.data===undefined ? [] : res.data);
        });
    }

    //obtenemos los artículos por autor

    //const getArticlesPropietario= () =>{
        //axios.get('/api/usuario/blogspublicados',{propietario:"Ruben Urrego"})
       //  .then(res=>{
       // console.log(res.data)
    //})}

    //Eliminamos un artículo por su id

    const deleteArticle = (id) => {
        axios.post('/api/usuario/eliminarBlog',{id:id}).then(res => {
            getArticles();
        });
    }

    //Editar un artículo
    
    const editArticle = (datos) => {
        axios.post('/api/usuario/editarBlog',datos).then(res=>{
            getArticles();
        })
    }

    
    return (

        <div className="publicaciones">
            <h1 className="mt-5">Artículos</h1>
            <br /><br />
            <div className="container">
                <div className="articles-container">
                    {
                        articles.length > 0 ? (

                            articles.map((article, i) => {

                                return (




                                    <Article
                                        key={i}
                                        id={article._id}
                                        articleData={article}
                                        delArticle={deleteArticle}
                                        editArticle={editArticle}

                                    />




                                );
                            })

                        ) : (

                            <h3 className="mx-auto">No hay artículos que mostrar</h3>

                        )}
                </div>
            </div>
        </div>

    );
}

export default Articles;