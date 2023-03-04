import React from 'react'

const News = () => {
  return (
    <div>
        <section className="section" id="blog">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 text-center">
                                <div className="section-heading">
                                    {/* Heading */}
                                    <h2 className="section-title">
                                        Read our latest news
                                    </h2>
                                    {/* Subheading */}
                                    <p>
                                        Our duty towards you is to share our experience we're reaching in our work path with you.
                                    </p>
                                </div>
                            </div>
                        </div> {/* / .row */}
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-box">
                                    <div className="blog-img-box">
                                        <img src="images/blog/blog-1.jpg" alt className="img-fluid blog-img" />
                                    </div>
                                    <div className="single-blog">
                                        <div className="blog-content">
                                            <h6> 17 October 2018</h6>
                                            <a href="#!">
                                                <h3 className="card-title">Top tips to speed up your site in a speedy time</h3>
                                            </a>
                                            <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                            <a href="#!" className="read-more">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-box">
                                    <div className="blog-img-box">
                                        <img src="images/blog/blog-2.jpg" alt className="img-fluid blog-img" />
                                    </div>
                                    <div className="single-blog">
                                        <div className="blog-content">
                                            <h6> 17 October 2018</h6>
                                            <a href="#!">
                                                <h3 className="card-title">Brand your site value with marketing strategies</h3>
                                            </a>
                                            <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                            <a href="#!" className="read-more">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="blog-box">
                                    <div className="blog-img-box">
                                        <img src="images/blog/blog-3.jpg" alt className="img-fluid blog-img" />
                                    </div>
                                    <div className="single-blog">
                                        <div className="blog-content">
                                            <h6> 17 October 2018</h6>
                                            <a href="#!">
                                                <h3 className="card-title">Website Optimization is very essential for site speed</h3>
                                            </a>
                                            <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                            <a href="#!" className="read-more">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default News