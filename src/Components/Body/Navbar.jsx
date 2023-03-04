import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../portfolio/Logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
        <div className="container">
          <a className="navbar-brand">
<img src={Logo} style={{height:'40px'}} alt="" />
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
                <Link  to="/" className="nav-link js-scroll-trigger">
                  Home
                </Link>
              </li>
              
              <li className="nav-item ">
                <a href="#service" className="nav-link js-scroll-trigger">
                  Services
                </a>
              </li>
              <li className="nav-item ">
                <a href="#pricing" className="nav-link js-scroll-trigger">
                  Pricing
                </a>
              </li>
              <li className="nav-item ">
                <a href="#projects-wrap" className="nav-link js-scroll-trigger">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a href="#work" className="nav-link js-scroll-trigger">
                  Projects
                </a>
              </li>
              <li className="nav-item ">
                <Link
                  to="ContactUs"
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
  );
};

export default Navbar;
