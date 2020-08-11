import React from 'react'
import "./test.css"

export default function Cardc(props) {
    return (

        <div className="card col-3 mr-4 ml-4" style={{ width: "10rem" }}>
            <img src={props.urlc} className="card-img-top" alt="img3" />
            <div className="card-body">
                <p className="card-text"><h2 className="font_T">{props.namec}</h2></p>
            </div>
        </div>
    )
}

