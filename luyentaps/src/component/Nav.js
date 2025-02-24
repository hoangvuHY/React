import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/Home" className="nav-link" activeClassName='chon' >
                                    Home
                            </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link"  activeClassName='chon'>
                                    About
                            </NavLink>
                            </li>  
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link"  activeClassName='chon'>
                                    Contact
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;