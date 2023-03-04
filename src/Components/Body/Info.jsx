import React from 'react'

const Info = () => {
  return (
    <div>

<div>
  <div className="top-bar bg-dark py-2 py-md-0" id="top-bar">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="top-bar-left text-white text-md-left text-sm-center">
            <i className="fas fa-map-marker-alt" />
            <span className="ml-2">4 Goldfield Rd. Honolulu, HI 96815</span>
          </div>
        </div>
        <div className="col-lg-4 ml-lg-auto col-md-6">
          <ul className="list-inline list-unstyled header-socials text-md-right text-sm-center">
            <li className="list-inline-item"><a href="#!"> <i className="fab fa-facebook-f" /></a></li>
            <li className="list-inline-item"><a href="#!"> <i className="fab fa-twitter" /></a></li>
            <li className="list-inline-item"><a href="#!"> <i className="fab fa-pinterest-p" /></a></li>
            <li className="list-inline-item"><a href="#!"> <i className="fab fa-linkedin" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="logo-bar d-none d-md-block d-lg-block bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="logo d-none d-lg-block">
            {/* Brand */}
            <a className="navbar-brand js-scroll-trigger" href="index.html">
              <h2 className="mb-0">Rappo</h2>
            </a>
          </div>
        </div>
        <div className="col-lg-8 justify-content-end ml-lg-auto d-flex col-12 col-md-12 justify-content-md-center">
          <div className="top-info-block d-inline-flex">
            <div className="icon-block">
              <i className="ti-mobile" />
            </div>
            <div className="info-block">
              <h5 className="font-weight-500">+7809346657</h5>
              <p>Call Free</p>
            </div>
          </div>
          <div className="top-info-block d-inline-flex">
            <div className="icon-block">
              <i className="ti-email" />
            </div>
            <div className="info-block">
              <h5 className="font-weight-500">info@example.com</h5>
              <p>Email Us</p>
            </div>
          </div>
          <div className="top-info-block d-inline-flex">
            <div className="icon-block">
              <i className="ti-time" />
            </div>
            <div className="info-block">
              <h5 className="font-weight-500">Mon-Sat 9:00-12.00 </h5>
              <p>Sunday Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Info