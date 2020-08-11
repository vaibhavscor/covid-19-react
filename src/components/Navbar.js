import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-brand" >COVID-19</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to='/'>Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to='/cases'>Cases</Link>
                        <Link className="nav-link" to='/symptomps'>Symptomps</Link>
                        <Link className="nav-link" to='/prevention'>Preventions</Link>
                        <Link className="nav-link" to='/news'>News</Link>
                        {/* <Link className="nav-link" to='/contact'>Contact</Link> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}
