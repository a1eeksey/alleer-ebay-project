import React from "react";
import dashboardScreenshort from "../../assets/images/dashboardScreenshort.png"

function Home_Second() {
    return (
        <section className="py-5 mb-10" id="howlooks">
            <div className="container px-5">
                <div className="text-center mb-5">
                    <h6 className="text-primary">Look and Feel</h6>
                    <h4 className="h2 mb-0">And how does it look like?</h4>
                    <p>Some impressions from ALLEER</p>
                </div>
                <div className="d-xl-block">
                    <img className="mw-100 img-responsive rounded-3 my-5" src={dashboardScreenshort} alt="..."/>
                </div>
                <div className="my-10 text-center mb-5">
                    <div className="w-xl-75 w-md-100 px-5 py-3 shadow align-items-center d-inline-block d-lg-inline-flex rounded-3">
                        <div className="text-lg-start text-md-center px-2">
                            <h2 className="h6 responsive">Create your free account now!</h2>
                            <p className="w-75 card-text d-none d-lg-block">Registration and testing risk-free without providing payment information possible</p>
                        </div> 
                        <div className="btn-block d-sm-flex justify-content-center py-2">
                            <a className="w-100 btn btn-primary btn-main px-4" href="#">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_Second;