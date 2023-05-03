import React, { useState } from "react";
import Projectmodal from "../Modals/Projectmodal";

import image1 from "../../portfolio/portfolio-image-1.jpg";
import image2 from "../../portfolio/portfolio-image-2.jpg";
import image3 from "../../portfolio/portfolio-image-3.jpg";
import image4 from "../../portfolio/portfolio-image-4.jpg";
import image5 from "../../portfolio/portfolio-image-5.jpg";
import image6 from "../../portfolio/portfolio-image-6.jpg";
import image7 from "../../portfolio/portfolio-image-7.jpg";
import image8 from "../../portfolio/portfolio-image-8.jpg";
import image9 from "../../portfolio/portfolio-image-9.jpg";
import image10 from "../../portfolio/portfolio-image-10.jpg";

import image11 from "../../portfolio/alphaWeb2.png";
import image12 from "../../portfolio/alphaWeb4.png";
import image13 from "../../portfolio/alphaWeb5.png";
import image14 from "../../portfolio/alphaWeb7.png";
import image15 from "../../portfolio/alphaWeb9.png";
import image16 from "../../portfolio/alphaWeb11.png";
import image17 from "../../portfolio/alphaWeb13.png";
import image18 from "../../portfolio/alphaWeb16.png";
import image19 from "../../portfolio/alphaWeb17.png";
import image20 from "../../portfolio/alphaWeb20.png";
import image21 from "../../portfolio/alphaWeb21.png";
import image22 from "../../portfolio/alphaWeb23.png";
import image23 from "../../portfolio/alphaWeb25.png";
import image24 from "../../portfolio/alphaWeb27.png";
import image25 from "../../portfolio/alphaWeb29.png";
import image27 from "../../portfolio/alphaWeb33.png";
import image28 from "../../portfolio/alphaWeb35.png";
import image29 from "../../portfolio/alphaWeb37.png";
import image31 from "../../portfolio/alphaWeb41.png";
import image32 from "../../portfolio/alphaWeb43.png";
import products from "../Sourcefiles/Portfolioprojects";

const Items = () => {
  const [index, setIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState({});
  const [shouldShow, setShouldShow] = useState(false);

  function oncloseModal() {
    setShouldShow((prev) => !prev);
  }

  const filteredData =
    index === 1
      ? products.filter((objects) => objects.sort === "webapp")
      : index === 2
        ? products.filter((objects) => objects.sort === "app")
        : products;

  return (
    <div>
      <Projectmodal
        showModal={shouldShow}
        closeModal={oncloseModal}
        selectedItem={selectedItem}
      />
      <div>
        <section id="our-portfolio" className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 text-center">
                <div className="section-heading">
                  <div className="line w-50 mx-auto mb-3" />
                  <h2 className="section-title">Our Portfolio</h2>
                  <p>
                    Our portfolio includes a diverse range of projects, from web
                    and mobile applications to custom software solutions and
                    integrations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="d-flex justify-content-end">
              <button
                className={
                  index === 0
                    ? "btn btn-outline-primary m-1"
                    : "btn btn-primary m-1"
                }
                onClick={() => setIndex(0)}
                style={{ borderRadius: "50px" }}
              >
                All
              </button>
              <button
                className={
                  index === 1
                    ? "btn btn-outline-primary m-1"
                    : "btn btn-primary m-1"
                }
                onClick={() => setIndex(1)}
                style={{ borderRadius: "50px" }}
              >
                Web
              </button>
              <button
                className={
                  index === 2
                    ? "btn btn-outline-primary m-1"
                    : "btn btn-primary m-1"
                }
                onClick={() => setIndex(2)}
                style={{ borderRadius: "50px" }}
              >
                App
              </button>
            </div>

            <div className="row">
              {filteredData.map((items) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 p-0">
                      <div className="work-block">
                        <img
                          src={items.image_url}
                          width={350}
                          height={250}
                          alt="work-img"
                        />
                        <div className="overlay-content-block">
                          <h4>{items.name}</h4>
                          <p>{items.type}</p>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setSelectedItem(items);
                              oncloseModal();
                            }}
                          >
                            <i className="fa-solid fa-chevron-right text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Items;
