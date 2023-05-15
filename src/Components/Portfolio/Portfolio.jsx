import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../portfolio/Logo.png";
import cover1 from '../Sourcefiles/Images/cover1.png'
import cover2 from '../Sourcefiles/Images/cover2.png'
import WOW from 'wowjs';

import 'wowjs/css/libs/animate.css';

const Portfolio = () => {

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    return (
        <div>
            {/* navbar */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
                    <div className="container">
                        <a className="navbar-brand">
                            <img src={Logo} style={{ height: "40px" }} alt="" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fa fa-bars" />
                        </button>
                        <div
                            className="collapse navbar-collapse has-dropdown"
                            id="navbarCollapse"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <Link to="/" className="nav-link js-scroll-trigger">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item ">
                                    <Link
                                        to="/ContactUs"
                                        state={{
                                            subject: "Premium",
                                            message:
                                                "Describe the requirements required for your project ...",
                                        }}
                                        className="nav-link"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* main content */}

            <div style={{ backgroundColor: "#000", paddingTop: "85px" }} />
            <div className="header-block">
                <div className="main-block">
                    <h1 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">Launching products that scale</h1>
                    <p className="sub-para-portfolio wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">Utility partners with clients to design and develop custom mobile apps, platforms and experiences. We work with an array of clients, from global brands and media properties to innovative startups and funded ventures.</p>
                </div>
            </div>
            <div className="main-portfolio-section">
                <div className="row mb-5">
                    <div className="col-lg-6 mb-3">
                        <div className="card main-card" style={{ backgroundColor: '#FF5A5F' }} >
                            <img src={cover1} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body p-5">
                                <p className="text-white">Airbnb</p>
                                <h1 className="text-white">Digital Ecosystem for 20,000 Airbnb hosts</h1>
                                <div className="divider-info" />
                                <Link to='/Project-info' style={{ textDecoration: "none" }} className="text-white">
                                    <p>View Case Study  <i className="arrow fa-solid fa-chevron-right" /> </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="card main-card" style={{ backgroundColor: '#202020' }} >
                            <img src={cover2} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body p-5">
                                <p className="text-white">Airbnb</p>
                                <h1 className="text-white">Digital Ecosystem for 20,000 Airbnb hosts</h1>
                                <div className="divider-info" />
                                <div className="text-white ">
                                    <p>View Case Study  <i className="arrow fa-solid fa-chevron-right" /> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio