import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./news.css"

export default function News() {
    const [news, setnews] = useState([])
    const [loading, setloading] = useState(false)
    useEffect(() => {
        async function getdata() {
            const res = await axios.get(`https://cryptic-ravine-96718.herokuapp.com/`);
            console.log(res.data.news);
            setnews(res.data.news)
            setloading(true)
        }
        getdata();
    });


    return (
        <div className="newsback">
            {loading ? (<div>
                {news.map((cntry) => (
                    <div className="container-fluid">
                        <div className="card mb-3 contr" style={{ width: "540px" }}>

                            <div className="row no-gutters">
                                {/* <div className="col-md-4">
        <img src="{cntry.img}" className="card-img" alt="..." />
    </div> */}
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{cntry.title}</h5>
                                        <a className="btn btn-success" href={cntry.link} >
                                            Read more
      </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
                }
            </div >) : (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
        </div>
    )
}
