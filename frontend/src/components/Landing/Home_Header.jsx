import React from "react";
import { Link } from 'react-router-dom';

function Home_Header({title, text, paragraph, image}) {
    return (
        <div className="container px-5 py-5 mb-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder mb-2">{title}</h1>
                                <h4 className="mb-4">{text}</h4>
                                <p className="card-text">{paragraph}</p>
                                <div className="gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <Link to="/signup" className="btn btn-primary">Get started</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={image} alt="..."/></div>
                    </div>
                </div>
            
    )
}

export default Home_Header;