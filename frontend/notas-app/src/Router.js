import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import New from './components/New';
import Articles from './components/Articles';
import Login from './components/Login';
import Register from './components/Register'

const Router = () => {
    return (
        
        <BrowserRouter>
            <Header />

            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/new" element={<New />} />
                <Route exact path="/articles" element={<Articles />} />
            </Routes>
        </BrowserRouter>


    );
}

export default Router;

