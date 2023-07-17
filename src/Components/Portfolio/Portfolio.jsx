import AllProjects from "../Sourcefiles/AllProjects";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Sourcefiles/Images/Logo.png";
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

const Portfolio = () => {
    const [loading, setLoading] = useState(true);
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setProjectsData(AllProjects);
        topFunction();
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 400 ||
            document.documentElement.scrollTop > 400
        ) {
            mybutton = "block";
        } else {
            mybutton = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div>
            {loading === true ? (
                <div></div>
            ) : (
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
                                            to="/Web-Portfolio"
                                            className="nav-link js-scroll-trigger"
                                        >
                                            Projects
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
            )}

            {loading === true ? (
                <>
                    <div style={{ height: '100vh' }}>
                        <div className="project-loader-color fa fa-spin project-loader" />
                    </div>
                </>
            ) : (
                <>
                    <div style={{ backgroundColor: "#000", paddingTop: "85px" }} />
                    <div className="main-portfolio-section">
                        <div className="header-block">
                            <div className="main-block">
                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay="0.3s"
                                    data-wow-duration="1s"
                                >
                                    Launching products that scale
                                </h1>
                                <p
                                    className="sub-para-portfolio wow fadeInUp"
                                    data-wow-delay="0.4s"
                                    data-wow-duration="1s"
                                >
                                    Utility partners with clients to design and develop custom mobile apps, platforms and experiences. We work with an array of clients, from global brands and media properties to innovative startups and funded ventures.
                                </p>
                            </div>
                        </div>

                        <div className="row mb-5">
                            {projectsData.map((item) => (
                                <div className="col-lg-6 mb-3" key={item.id}>
                                    <div
                                        className="card main-card"
                                        style={{ backgroundColor: `${item.color}` }}
                                    >
                                        <img
                                            src={item.image_url}
                                            className="card-img-top img-height"
                                            alt="..."
                                        />
                                        <div className="card-body p-5">
                                            <p className="text-white" style={{ fontSize: '24px' }}>{item.project_name}</p>
                                            <h1 className="text-white">{item.main_heading}</h1>
                                            <div className="divider-info" />
                                            <Link
                                                to={`/Project-info/${item.id}`}
                                                style={{ textDecoration: "none" }}
                                                className="text-white"
                                            >
                                                <p>
                                                    View Case Study <i className="arrow fa-solid fa-chevron-right" />
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Portfolio;
