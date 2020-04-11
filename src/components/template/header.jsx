import React, { Fragment } from 'react';
import {
    Link
} from "react-router-dom";
import './template.scss'
const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="#">CV Karya Murni Publisher</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 pull-right">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/galery">Galery</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Header;