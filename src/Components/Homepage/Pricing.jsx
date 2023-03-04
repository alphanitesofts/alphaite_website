import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div>
      <section className="section" id="pricing">
        {/* Content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center">
              <div className="section-heading">
                {/* Heading */}
                <h2 className="section-title">Affordable Price Plan</h2>
                {/* Subheading */}
                <p>
                We believe in providing our clients with transparent and competitive pricing for our services
                </p>
              </div>
            </div>
          </div>{" "}
          {/* / .row */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pricing-box">
                <h3>Basic Plan</h3>
                <div className="price-block">
                  <h2>
                    <small>$</small>440
                  </h2>
                  <h3
                    style={{ fontSize: "12px" }}
                    className="price-features list-unstyled"
                  >
                    IPHONE OR ANDROID BASIC APP
                  </h3>
                </div>
                <ul className="price-features list-unstyled">
                  <li>2 Operating systems</li>
                  <li>App Submission</li>
                  <li>
                    <s>App Icon</s>
                  </li>
                  <li>
                    <s>Include Source Code</s>
                  </li>
                  <li>
                    <s>Splash Screen</s>
                  </li>
                  <li>
                    <s>Ad Network Integration</s>
                  </li>
                </ul>
                <Link
                  to="/ContactUs"
                  state={{
                    subject: "Basic Plan",
                    message: "Hello I would like to buy the Basic package ...",
                  }}
                  className="btn btn-outline-dark btn-circled"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pricing-box">
                <h3>Business Plan</h3>
                <div className="price-block">
                  <h2>
                    <small>$</small>860
                  </h2>
                  <h3
                    style={{ fontSize: "12px" }}
                    className="price-features list-unstyled"
                  >
                    IPHONE OR ANDROID BASIC APP
                  </h3>
                </div>
                <ul className="price-features list-unstyled">
                  <li>2 Operating systems</li>
                  <li>App Submission</li>
                  <li>App Icon</li>
                  <li>Include Source Code</li>
                  <li>
                    <s>Splash Screen</s>
                  </li>
                  <li>
                    <s>Ad Network Integration</s>
                  </li>
                </ul>
                <Link
                  to="/ContactUs"
                  state={{
                    subject: "Business Plan",
                    message:
                      "Hello I would like to buy the Business package ...",
                  }}
                  className="btn btn-primary btn-circled"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-8 col-md-6">
              <div className="pricing-box ">
                <h3>Premium Plan</h3>
                <div className="price-block">
                  <h2>
                    <small>$</small>1295
                  </h2>
                  <h3
                    style={{ fontSize: "12px" }}
                    className="price-features list-unstyled"
                  >
                    IPHONE OR ANDROID BASIC APP
                  </h3>
                </div>
                <ul className="price-features list-unstyled">
                  <li>2 Operating systems</li>
                  <li>App Submission</li>
                  <li>App Icon</li>
                  <li>Splash Screen</li>
                  <li>Ad Network Integration</li>
                  <li>Include Source Code</li>
                </ul>
                <Link
                  to="/ContactUs"
                  state={{
                    subject: "Premium Plan",
                    message:
                      "Hello I would like to buy the Premium package ...",
                  }}
                  className="btn btn-outline-dark btn-circled"
                >
                  Purchase Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
