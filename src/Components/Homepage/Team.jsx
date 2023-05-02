import React from "react";
import { Link } from 'react-router-dom'

import affan from "../../portfolio/affan.jpg";
import ayesha from "../../portfolio/ayeshaBukhari.jpg";
import bilal from "../../portfolio/BilalShuja.jpg";
import daniyal from "../../portfolio/Daniyal.jpg";
import faraz from "../../portfolio/Faraz.jpg";
import iqra from "../../portfolio/IqraRasheed.jpg";
import sarib from "../../portfolio/Sarib.jpg";
import usama from "../../portfolio/usama.jpg";
import waleed from "../../portfolio/waleed.jpg";
import nauman from "../../portfolio/noman.jpg";
import teammembers from "../Sourcefiles/TeamMembers";

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
        {
          teammembers.map((items) => {
            return (
              <>
                <div className="col-lg-3">
                  <div className="card m-3 mx-auto" style={{ width: "18rem" }}>
                    <img src={items.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{items.name}</h5>
                      <p className="card-text">{items.designation}</p>
                      <div className="btn-social-all ">
                        <Link to='/MemberProfile'
                          className="animate pop delay-1 btn-social "
                          style={{ marginLeft: "200px" }}
                        >
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default Team;
