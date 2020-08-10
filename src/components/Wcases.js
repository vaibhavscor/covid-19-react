import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import './case.css';

export default function Wcases() {
    const [cntr, setcntr] = useState([])
    const [totl, settotl] = useState([])

    useEffect(() => {
        async function getdata() {
            const res = await axios.get(`https://api.covid19api.com/summary`);
            console.log(res.data.Global);
            setcntr(res.data.Countries)
            settotl(res.data.Global)
        }

        getdata();
    });



    return (
        <>

            <div className="over_alldata_1 container_w">

                <div>
                    <h3 style={{ background: "none" }}>TOTAL CASES IN WORLD</h3>
                </div>

                <div className="row caseW">
                    <div className="WTconf">
                        <h5>Total Confirmed</h5>
                        <h4>{totl.TotalConfirmed}</h4>
                    </div>
                    <div className="WTnconf">
                        <h5>Total NewConfirmed</h5>
                        <h4>{totl.NewConfirmed}</h4>
                    </div>
                    <div className="WTrecov">
                        <h5>Total Recovered</h5>
                        <h4>{totl.TotalRecovered}</h4>
                    </div>
                    <div className="WTdeath">
                        <h5>Total Deaths</h5>
                        <h4>{totl.TotalDeaths}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
