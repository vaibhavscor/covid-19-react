import React from 'react';
import Cardc from './Cardc';
import "./preventions.css"

export default function Preventions() {
    return (
        <div>
            <div className="headrP">
                <img src={require("../assests/steps/s0.png")} alt="img4" />
            </div>
            <div className="p menu">

                <div className="row rowcs">
                    < Cardc urlc={require("../assests/steps/s1.png")} namec="Check Temperature" />
                    < Cardc urlc={require("../assests/steps/s2.png")} namec="Were Mask" />
                    < Cardc urlc={require("../assests/steps/s3.png")} namec="Keep distancing" />
                </div>
                <div className="row rowcs">
                    < Cardc urlc={require("../assests/steps/s4.png")} namec="Wash Hands" />
                    < Cardc urlc={require("../assests/steps/s5.png")} namec="Avoid Touching" />
                    < Cardc urlc={require("../assests/steps/s6.png")} namec="Avoid Cash" />
                </div>
            </div>
        </div>
    )
}
