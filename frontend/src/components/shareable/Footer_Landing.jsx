import React from "react";
import { Link } from 'react-router-dom';

// Icons
import map from "../../assets/images/map.svg"

function Footer() {
    return (
        <footer className="h-75 w-100 m-0 footer p-5 text-center"> 
        <div className="container"> 
            <div className="row"> 
                <div className="col-md-3 text-start"> 
                    <h4><a className="navbar-brand logo" href="#">ALLEER</a></h4> 
                    <p> 
                    While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface.
                    </p> 
                </div> 
                <div className="col-md-3"> 
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled"> 
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/feature">Feature</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/integrations">Integrations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/faq">FAQ</Link>
                    </li>
                    </ul>  
                </div> 
                <div className="col-md-3"> 
                    <h5>Contact</h5> 
                    <ul className="list-unstyled"> 
                        <li>Los Angeles, CA - Main Office</li> 
                        <li>info@alleer.com</li> 
                    </ul> 
                </div> 
                <div className="col-md-3"> 
                    <h5>Location On Map</h5> 
                    <div className="d-xl-block">
                        <img className="mw-100 rounded-3 " src={map} alt="..."/>
                    </div>
                </div> 
            </div> 
            
            <div className="pt-5 row"> 
                <div className="col-md-6 text-start"> 
                    <p>© 2024 ALLEER Website. All rights reserved.</p> 
                </div> 
                <div className="col-md-6 text-end"> 
                    <ul className="list-inline footer-links"> 
                        <li className="list-inline-item"> 
                            <a href="#" className="text-white"> 
                                Privacy Policy 
                            </a> 
                        </li> 
                        <li className="list-inline-item"> 
                            <a href="#" className="text-white"> 
                                Terms of Service 
                            </a> 
                        </li> 
                        <li className="list-inline-item"> 
                            <a href="#" className="text-white"> 
                                Sitemap 
                            </a> 
                        </li> 
                    </ul> 
                </div> 
            </div> 
        </div> 
    </footer> 
    )
}

export default Footer;