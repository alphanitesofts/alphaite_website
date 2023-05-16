import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../portfolio/Logo.png";
import mainLogo from "../Sourcefiles/Images/web.png";

const Projectinfo = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollPositionx, setScrollPositionx] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPositionx(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getTransformStyle = () => {
        const scale = 1 + scrollPosition * 0.01;
        return { transform: `scale(${scale})` };
    };

    const getOpacityStyle = () => {
        const opacity = 1 - scrollPosition / window.innerHeight;
        return { opacity };
    };

    const shouldHideImage = scrollPosition > 500;

    const calculateBackgroundColor = () => {
        const redValue = Math.round((scrollPositionx / window.innerHeight) * 255);
        const backgroundColor = `rgb(${redValue}, ${redValue}, ${redValue})`;
        return backgroundColor;
    };

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
            {/* className="main-background" */}
            <div style={{ backgroundColor: calculateBackgroundColor() }}>
                <div className="main-section-info">
                    <div className="center-block">
                        <div className="col-lg-6 mx-auto">
                            <p style={{ fontSize: "30px" }} className="mt-0 mb-0 text-white">
                                <b>AirBnB Open</b>
                            </p>
                            <p
                                style={{
                                    fontSize: "56px",
                                    fontWeight: "300",
                                    lineHeight: "120%",
                                }}
                                className="mt-0 mb-0 text-white"
                            >
                                Global annual conference for 20,000+ Airbnb hosts from 100+
                                countries
                            </p>
                        </div>
                    </div>

                    <img
                        src={mainLogo}
                        className="logo-style"
                        alt=""
                        style={{
                            ...getTransformStyle(),
                            ...getOpacityStyle(),
                            display: shouldHideImage ? "none" : "initial",
                        }}
                    />
                </div>

                <div style={{ marginTop: '80px' }}>
                    <div className="container">
                        <div className="">
                            <div className="center-block">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4">
                                        <h1>THE
                                            CHALLENGE</h1>
                                    </div>
                                    <div className="col-lg-5">
                                        <p>Airbnb’s third-annual global conference, the Airbnb Open, welcomed 20,000+ hosts from 100+ countries to LA for a week of social collaboration, learning, speaker panels and specialty classes, capped off by a star-studded awards show and music. For a modern brand like Airbnb, the mobile and digital experience was a prime focus to engage users before, during and after the event, with smartly crafted applications that facilitate the best experience possible.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projectinfo;
