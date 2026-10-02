import React from 'react';

function Edu() {
    return (
        <div className="container mt-5">
            <div className="row p-5 align-items-center">
                {/* Left Section (Illustration) */}
                <div className="col-lg-6 col-md-6 text-center mb-4 mb-md-0">
                    <img src="media/education.svg" alt="Education illustration" className="img-fluid" style={{ width: "75%" }} />
                </div>

                {/* Right Section (Content & Links) */}
                <div className="col-lg-6 col-md-6">
                    <h2 className="fs-3 mb-4">Free and open market education</h2>
                    
                    <p className="text-muted">
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="" className="text-decoration-none fw-bold d-block mb-4">
                        Varsity &rarr;
                    </a>

                    <p className="text-muted">
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="" className="text-decoration-none fw-bold">
                        TradingQ&A &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Edu;