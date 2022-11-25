import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';
import logo from '../assets/images/logoFYB.png';

const TotalBlogs = () => {

    const [articles, setTotalBlogs] = useState([]);

    useEffect(() => {
        getArticles();
        console.log(articles);
    }, [articles.length]);


    //Obtenemos los artículos

    const getArticles = () => {
        axios.get('/api/usuario/totalblogs').then(res => {
            setTotalBlogs(res.data);
        });
    }

    //obtenemos los artículos por autor

   

    
    return (

        <div>
            <div className="card mb-3 p-4" >
                <div className="row g-0">
                    <div class="col-md-4">
                    <img src= {logo} className="img-fluid rounded-start w-50" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">FYB Blogs</h3>
                        <p className="card-text">For You Blog es una página de blogs personales, donde cada persona tiene la posibilidad de poder publicar su blog o artículo sobre algún tema en específico de su gusto.</p>
                       
                    </div>
                    </div>
                </div>
                </div>

            <div className="publicaciones">
                <h1 className="mt-5">Artículos</h1>
                <br /><br />
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                        {
                            articles.length > 0 ? (

                                articles.map((article, i) => {

                                    return (




                                        <Article
                                            key={i}
                                            id={i}
                                            articleData={article}
                                            

                                        />




                                    );
                                })

                            ) : (

                                <h3 className="mx-auto">Aquí podrás ver los artículos una vez los autores los hayan publicado</h3>

                            )}
                    </div>
                </div>
            </div>
         </div>

    );
}

export default TotalBlogs;