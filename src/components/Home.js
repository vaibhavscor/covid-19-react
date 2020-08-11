import React from 'react'
import Weather from './Weather';
import './homeC.css';

export default function Home() {
    return (
        <div className="nosc">
            <div className="content home_content">
                <div className="bimg col-6">
                    <img src={require("../assests/bg1.png")} alt="img5" />
                </div>
                <div className="weather col-6">
                    <Weather />
                </div>
            </div>
        </div>
    )
}
