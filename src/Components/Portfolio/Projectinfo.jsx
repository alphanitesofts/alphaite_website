import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../portfolio/Logo.png";


const Projectinfo = () => {
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

            <div className='main-section-info'>
                <div className='center-block'>
                    <h4 className="text-white">AirBnB Open</h4>
                    <h1>Global annual conference for 20,000+ Airbnb hosts from 100+ countries</h1>
                </div>
            </div>
        </div>
    )
}

export default Projectinfo