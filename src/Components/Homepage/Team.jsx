import React from "react";
import affan from "../../portfolio/affan.jpg";
import ayesha from "../../portfolio/ayeshaBukhari.jpg";
import bilal from "../../portfolio/BilalShuja.jpg";
import daniyal from "../../portfolio/Daniyal.jpg";
import faraz from "../../portfolio/Faraz.jpg";
import iqra from "../../portfolio/IqraRasheed.jpg";
import sarib from "../../portfolio/Sarib.jpg";
import usama from "../../portfolio/usama.jpg";
import waleed from "../../portfolio/waleed.jpg";

const Team = () => {
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="line w-50 mx-auto mb-3" />
          <div className="section-heading">
            <h2 className="section-title">Our Team</h2>
            <p>
              Our team is a diverse and highly skilled group of individuals who
              are committed to achieving our shared goals
            </p>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-3">
          <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
            <img src={usama} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Usama Abdullah</h5>
              <p className="card-text">Director</p>
              <div className="d-flex justify-content-center btn-social-all">
                <a
                  className="animate pop delay-1 btn-social"
                  href="https://www.facebook.com/usama425"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="animate pop dealy-2 btn-social"
                  href="https://www.instagram.com/_usama.abdullah/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="animate pop delay-3 btn-social"
                  href="https://www.linkedin.com/in/usama-abdullah-412164188/"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
            <img src={sarib} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sarib Arshad Khan</h5>
              <p className="card-text">Chief Executive Officer</p>
              <div className="d-flex justify-content-center btn-social-all">
                <a
                  className="animate pop delay-1 btn-social"
                  href="https://www.facebook.com/people/Sarib-Arshad/100013306247594/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="animate pop dealy-2 btn-social"
                  href="https://www.instagram.com/saribkhannn/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="animate pop delay-3 btn-social"
                  href="https://www.linkedin.com/in/sarib-khan-195215119/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
            <img src={iqra} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Iqra Rasheed</h5>
              <p className="card-text">Regional Operations Manager</p>
              <div className="d-flex justify-content-center btn-social-all">
                <a
                  className="animate pop delay-1 btn-social"
                  href="https://www.facebook.com/iqra.rshd"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="animate pop dealy-2 btn-social"
                  href="https://www.instagram.com/iqrarasheeed/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
            <img src={bilal} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bilal Shuja</h5>
              <p className="card-text">Full Stack Developer / Team Lead</p>
              <div className="d-flex justify-content-center btn-social-all">
                <a
                  className="animate pop delay-1 btn-social"
                  href="https://www.facebook.com/BiLly.s56/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="animate pop dealy-2 btn-social"
                  href="https://www.instagram.com/billy_s56/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="animate pop btn-social"
                  href="https://twitter.com/lly_11"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="animate pop delay-3 btn-social"
                  href="https://www.linkedin.com/in/bilal-shuja-a9a890118/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginBottom: "80px" }}>
        <div className="col-lg-3">
          <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
            <img src={waleed} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Waleed Ilyas Khan</h5>
              <p className="card-text">Network Engineer/Full Stack Developer</p>
              <div className="d-flex justify-content-center btn-social-all">
                <a
                  className="animate pop delay-1 btn-social"
                  href="https://www.facebook.com/waleed.khan.98871"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="animate pop dealy-2 btn-social"
                  href="https://www.instagram.com/waleed.khan.96/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="animate pop delay-3 btn-social"
                  href="https://www.linkedin.com/in/waleed-khan-2157aa16a/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
            <img src={ayesha} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Ayesha Bukhari</h5>
              <p className="card-text">Human Resource</p>
              <div className="d-flex justify-content-center btn-social-all">
                <a
                  className="animate pop delay-3 btn-social"
                  href="https://www.linkedin.com/in/waleed-khan-2157aa16a/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
            <img src={affan} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Affan Shiekh</h5>
              <p className="card-text">Full Stack Developer</p>
              <div className="btn-social-all">
                <a
                  className="animate pop delay-1 btn-social"
                  href="https://www.facebook.com/affan.ahmed.984349"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="animate pop dealy-2 btn-social"
                  href="https://www.instagram.com/affan_a7/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
            <img src={faraz} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Faraz Mahmood</h5>
              <p className="card-text">Full Stack Developer</p>
              <div className="d-flex justify-content-center btn-social-all">
                <a
                  className="animate pop delay-1 btn-social"
                  href="https://www.facebook.com/faraz.mahmood.19"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="animate pop dealy-2 btn-social"
                  href="https://www.instagram.com/faraz.mahmood.1/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  className="animate pop btn-social"
                  href="https://twitter.com/farazmahmood19"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="animate pop delay-3 btn-social"
                  href="https://www.linkedin.com/in/faraz-mahmood-0701b0208/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
