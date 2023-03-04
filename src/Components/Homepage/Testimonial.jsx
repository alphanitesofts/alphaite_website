import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <section className="section bg-grey" id="feature">
                <div className="container">
                    <div className="row justy-content-center">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="text-center feature-block">
                                <div className="img-icon-block mb-4">
                                    <i className="ti-thumb-up" />
                                </div>
                                <h4 className="mb-2">The right advice</h4>
                                <p>Our team are experts in matching you with the right provider.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="text-center feature-block">
                                <div className="img-icon-block mb-4">
                                    <i className="ti-cup" />
                                </div>
                                <h4 className="mb-2">Recognised for excellence</h4>
                                <p>We've been awarded for our high rate of customer satisfaction.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="text-center feature-block">
                                <div className="img-icon-block mb-4">
                                    <i className="ti-wallet" />
                                </div>
                                <h4 className="mb-2">Compare the best</h4>
                                <p>We only compare market leaders with a reputation for service quality.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="text-center feature-block">
                                <div className="img-icon-block mb-4">
                                    <i className="ti-dashboard" />
                                </div>
                                <h4 className="mb-2">Premium Services</h4>
                                <p>We aim to exceed our client's expectations and help them achieve their business goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial