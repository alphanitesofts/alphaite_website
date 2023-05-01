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

const Items = () => {
  const [index, setIndex] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);

  function oncloseModal() {
    setShouldShow((prev) => !prev);
  }


  const showProjects = () => {
    if (index === 0) {
      return (
        <>
          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image11} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Login</h4>
                <p>Web Application</p>
                <a href="" >
                  <i className="fa-solid fa-chevron-right text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image1} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Make a Cake</h4>
                <p>App Development</p>
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    oncloseModal();
                  }}>
                  <i className="fa-solid fa-chevron-right text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image12} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Rating</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image2} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Real Estate</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image13} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Category</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image14} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Customer feedback</h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image15} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Client Review</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image16} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand FAQs</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image3} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Let's Love Quran</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image17} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Blogs</h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image4} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>
                  Customer Support App</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image18} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Services</h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image19} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Authors</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image20} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay on Demand Author's Rating</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image5} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Mobile Safe</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image6} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Make a Cake</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image21} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Essay On Demand Contact Us</h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image22} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>GMS Revenue Sheet</h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image23} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Gym Panel</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image7} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Tourism</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image24} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>GMS Login</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image8} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Real Time Location</h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image25} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Gym Freak</h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image27} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>GMS Exspense Sheet</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image28} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Khan Burger Login</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image29} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Gym Freak </h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image9} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Cash Cab </h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image31} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Khan Burger Dashboard</h4>
                <p>Web Application</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image10} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Ramzan Electronics</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image32} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Fahad's Portfolio</h4>
                <p>Web Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

        </>
      );
    } else if (index === 1) {
      {
        return (
          <>
            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image11} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Login</h4>
                  <p>Web Application</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image12} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Dashboard</h4>
                  <p>Web Application</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image13} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Category</h4>
                  <p>Web Application</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image14} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Customer feedback</h4>
                  <p>Web Application</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image15} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Client Review</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image16} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand FAQs</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image17} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Blogs</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image18} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Services</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image19} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Authors</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image20} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Author's Rating</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image21} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Essay on Demand Contact Us</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image22} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Gym Panel</h4>
                  <p>Web Application</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image24} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>GMS Login</h4>
                  <p>Web Application</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image25} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Gym Freak</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image27} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>GMS Panel</h4>
                  <p>Web Application</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image28} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Khan Burgers</h4>
                  <p>Web Application</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image29} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>GYM Freaks Trainer</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image31} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Khan Burger Admin Panel</h4>
                  <p>Web Development</p>
                  <a href="">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src={image32} width={350} height={250} alt="work-img" />
                <div className="overlay-content-block">
                  <h4>Fahad's Portfolio</h4>
                  <p>Web Development</p>
                  <a href="https://fahadarif.netlify.app/" target="_blank">
                    <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      }
    } else if (index === 2) {
      return (
        <>
          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image1} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Make a Cake</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image2} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Real Estate App</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image3} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Let's Love Quran</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image4} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Customer Support App</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image5} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Mobile Safe</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image6} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Bakers App</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image7} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Tousrism</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image8} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Real Time Location</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image9} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Cash Cab</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="work-block">
              <img src={image10} width={350} height={250} alt="work-img" />
              <div className="overlay-content-block">
                <h4>Ramzan Electronics</h4>
                <p>App Development</p>
                <a href="">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <Projectmodal
        showModal={shouldShow}
        closeModal={oncloseModal}
      />
      <div>
        <section id="our-portfolio" className="section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 text-center">
                <div className="section-heading">
                  <div className="line w-50 mx-auto mb-3" />
                  <h2 className="section-title">Our Portfolio</h2>
                  <p>Our portfolio includes a diverse range of projects, from web and mobile applications to custom software solutions and integrations</p>
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
              {/* <button
                className={
                  index === 3
                    ? "btn btn-outline-primary m-1"
                    : "btn btn-primary m-1"
                }
                onClick={() => setIndex(3)}
                style={{ borderRadius: "50px" }}
              >
                Products
              </button> */}
            </div>

            <div className="row">{showProjects()}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Items;
