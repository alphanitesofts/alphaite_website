import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../portfolio/Logo.png";
import bg from '../Sourcefiles/Images/backgroundimage.png'
import profile from '../Sourcefiles/Images/profileImage.png'
import faraz from '../Sourcefiles/Images/WhatsApp Image 2022-07-31 at 9.12.57 PM.jpeg'

const MemberProfile = () => {

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

    useEffect(() => {
        topFunction();
    }, []);

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
            {/* background top image */}
            <div className='bg-img' >
                <img src={bg} className='img-fluid' alt="" />
            </div>

            {/* mainpage */}

            <div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className=' main-info-card'>
                            <div className='cardx-body'>
                                <div className='profile-card'>
                                    <img src={profile} className='profile-img' alt="" />
                                </div>
                                <div className='text-center'>
                                    <h3 className='mt-3'><b>Noman Zafar</b></h3>
                                    <p className='mt-0 mb-1'>Character designer and illustrator art.mybox@gmail.com</p>
                                    <p className='mt-0 mb-2'>https://www.instagram.com/art.khachatran/</p>
                                    <p className='mt-0 mb-3'> <i className='fa-solid fa-location-dot' />  Valencia, Spain</p>

                                    <button className='btn btn-primary btn-circled w-100 mb-2'>Follow</button>
                                    <button className='btn btn-secondary btn-circled w-100 mb-4'>Message</button>
                                </div>
                                <div>
                                    <div className='d-flex'>
                                        <p>Project View</p>
                                        <p className='ms-auto'>45,3489</p>
                                    </div>
                                    <div className='d-flex' style={{ marginTop: '-10px' }}>
                                        <p>Appreciations</p>
                                        <p className='ms-auto'>45,3489</p>
                                    </div>
                                    <div className='d-flex' style={{ marginTop: '-10px' }}>
                                        <p>Followers</p>
                                        <p className='ms-auto'>45,3489</p>
                                    </div>
                                    <div className='d-flex' style={{ marginTop: '-10px' }}>
                                        <p>Following</p>
                                        <p className='ms-auto'>45,3489</p>
                                    </div>
                                </div>

                                <div>
                                    <p className='text-dark'><b>On the web</b></p>
                                    <button className='btn btn-outline-secondary btn-circled w-100 mb-2' style={{ border: '1px solid #6c757d' }}><i className='fa-brands fa-linkedin fa-2x' />&nbsp;Linkedin</button>
                                    <button className='btn btn-outline-secondary btn-circled w-100 mb-2' style={{ border: '1px solid #6c757d' }}><i className='fa-brands fa-facebook fa-2x' />&nbsp;Facebook</button>
                                    <button className='btn btn-outline-secondary btn-circled w-100 mb-2' style={{ border: '1px solid #6c757d' }}><i className='fa-brands fa-instagram fa-2x' />&nbsp;Instagram</button>
                                </div>

                                <div>
                                    <p className='text-dark'><b>Teams</b></p>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className='col-lg-2 '>
                                                    <i className='fa-brands float-right fa-2x fa-chrome mt-2' />
                                                </div>
                                                <div className='col-lg-7'>
                                                    GamePack Gaming, Outsourcing Pakistan
                                                </div>
                                                <div className='col-lg-3'>
                                                    <p className='mt-2'> <i className='fa-solid fa-plus' /> <span style={{ fontSize: '10px' }}>Follow us</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 '>
                        <div className='d-flex mt-3 ms-3'>
                            <button className='btn btn-outline-primary btn-sm btn-circled me-1 ps-4 pe-4 rounded-pill'>Work</button>
                            <button className='btn btn-outline-secondary btn-sm btn-circled ms-1 ps-4 pe-4 rounded-pill' style={{ border: '1px solid #6c757d' }}>Appreciation</button>
                        </div>

                        <div className='row m-1 mt-2'>
                            <div className='col-lg-6'>
                                <img src={faraz} className='img-fluid' alt="" />
                            </div>
                            <div className='col-lg-6'>
                                <img src={faraz} className='img-fluid' alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default MemberProfile