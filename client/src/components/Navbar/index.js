/* eslint-disable jsx-a11y/anchor-is-valid */
import img from '../../img/OA Navbar V.png';
import React from "react";

function Navbar(props) {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="index.html">Dashboard</a>
                <a className="nav-link" href="/alerts">Alerts</a>
                <a className="nav-link" href="users.html">Users</a>
                <a className="nav-link" href="/alert">Submit</a>
            </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
            <img src={img} alt="Options Arena" width="30" height="24"
                className="d-inline-block align-text-top"/>
            Options Arena</a>
    </div>
</nav>
)};
export default Navbar;


