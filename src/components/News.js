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
                        <div class="card mb-3 contr" style={{ width: "540px" }}>

                            <div class="row no-gutters">
                                {/* <div class="col-md-4">
        <img src="{cntry.img}" class="card-img" alt="..." />
    </div> */}
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{cntry.title}</h5>
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
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
        </div>
    )
}
