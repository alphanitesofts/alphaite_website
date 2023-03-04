import React from 'react'

const WorkingProcess = () => {
    return (
        <div>
            <section className="section-bottom" id="process">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 text-center">
                            <div className="section-heading">
                                {/* Heading */}
                                <h2 className="section-title">
                                    Our Working process
                                </h2>
                                {/* Subheading */}
                                <p>
 Our working process is designed to be transparent, flexible, and efficient, so that we can deliver high-quality software solutions that meet our clients' needs and expectations.
                                </p>
                            </div>
                        </div>
                    </div> {/* / .row */}

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="process-block">
                                <img src="images/process/process-1.jpg" alt className="img-fluid" />
                                <h3>Project Research</h3>
                                {/* <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="process-block">
                                <img src="images/process/process-2.jpg" alt className="img-fluid" />
                                <h3>Project demostration</h3>
                                {/* <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="process-block">
                                <img src="images/process/process-3.jpg" alt className="img-fluid" />
                                <h3>Development &amp; delivery</h3>
                                {/* <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default WorkingProcess