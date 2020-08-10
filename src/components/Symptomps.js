import React from 'react';
import Cardc from './Cardc';
import "./symptomps.css"

export default function Symptomps() {
    return (
        <div className="container">
            <div className="headrC">
                <img src={require("../assests/symp/s0.png")} />
            </div>
            <div className="Smenu">

                <div className="row rowcs">
                    < Cardc urlc={require("../assests/symp/sp1.png")} namec="HEADACHE" />
                    < Cardc urlc={require("../assests/symp/sp2.png")} namec="COUGH AND SNEEZE" />
                </div>


                <div className="row rowcs">
                    < Cardc urlc={require("../assests/symp/sp3.png")} namec="HIGH FEVER" />
                    < Cardc urlc={require("../assests/symp/sp4.png")} namec="SORE THROAT" />
                </div>


            </div>
        </div>
    )
}
