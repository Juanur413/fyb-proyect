import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logoFYB.png';
import './header.css';

const Header = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <NavLink to="" className="navbar-brand" ><img className="App-logo" src={logo} alt="logo" width="80" /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item active">
                            <NavLink to="/login" className="nav-link" >Login <span className="sr-only"></span></NavLink>
                        </li>
                        
                        <li className="nav-item active">
                            <NavLink to="/new" className="nav-link" >Crear artículo <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/articles" className="nav-link" >Mis artículos<span className="sr-only"></span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;