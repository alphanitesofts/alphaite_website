import React from "react";
import affan from '../../portfolio/affan.jpg'
import ayesha from '../../portfolio/ayeshaBukhari.jpg'
import bilal from '../../portfolio/BilalShuja.jpg'
import daniyal from '../../portfolio/Daniyal.jpg'
import faraz from '../../portfolio/Faraz.jpg'
import iqra from '../../portfolio/IqraRasheed.jpg'
import sarib from '../../portfolio/Sarib.jpg'
import usama from '../../portfolio/usama.jpg'
import waleed from '../../portfolio/waleed.jpg'


const Team = () => {
  return (
    <div className="">
        <div className="row justify-content-center mt-5">
            <div className="col-md-8 col-lg-6 text-center">
              <div className="section-heading">
                {/* Heading */}
                <h2 className="section-title">Our Team</h2>
                {/* Subheading */}
                <p>
                Our team is a diverse and highly skilled group of individuals who are committed to achieving our shared goals
                </p>
              </div>
            </div>
          </div>
      <div className="row">

      <div className="col-lg-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={usama} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Usama Abdullah</h5>
              <p className="card-text">
                Director
              </p>
              <div className="d-flex justify-content-center">
                  <a className="animate pop btn-social" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="animate pop delay-1 btn-social" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="animate pop dealy-2 btn-social" href>
                    <i className="fab fa-youtube" />
                  </a>
                  <a className="animate pop delay-3 btn-social" href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={sarib} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sarib Arshad Khan</h5>
              <p className="card-text">
                Chief Executive Officer
              </p>
              <a href="#" className="btn btn-primary"></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={bilal} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bilal Shuja</h5>
              <p className="card-text">
              Full Stack Developer / Team Lead
              </p>
              <a href="#" className="btn btn-primary"></a>
            </div>
          </div>
        </div>

        

        <div className="col-lg-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={waleed} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Waleed Ilyas Khan</h5>
              <p className="card-text">
              Network Engineer/Full Stack Developer
              </p>
              <a href="#" className="btn btn-primary"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{marginBottom:'80px'}}>
        <div className="col-lg-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={ayesha} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Ayesha Bukhari</h5>
              <p className="card-text">
                Human Resource
              </p>
              <a href="#" className="btn btn-primary"></a>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={affan} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Affan Shiekh</h5>
              <p className="card-text">
                Full Stack Developer
              </p>
              <a href="#" className="btn btn-primary"></a>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={faraz} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Faraz Mahmood</h5>
              <p className="card-text">
                Full Stack Developer
              </p>
              <a href="#" className="btn btn-primary"></a>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card m-3" style={{ width: "18rem" }}>
            <img src={iqra} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Iqra Rasheed</h5>
              <p className="card-text">
              Regional Operations Manager
              </p>
              <a href="#" className="btn btn-primary"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
