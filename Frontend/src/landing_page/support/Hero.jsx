import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid py-4 px-5" id='supportHero' style={{color: "white" }}>
            {/* Top Bar: Support Portal & Track Tickets */}
            <div className="d-flex justify-content-between align-items-center mb-5" id="supportWrapper">
                <h4 className="fs-3 fw-normal">Support Portal</h4>
                <a href="" className="text-white text-decoration-underline fs-5">Track Tickets</a>
            </div>

            {/* Main Content Grid */}
            <div className="row px-4">
                {/* Left Column: Search & Quick Links */}
                <div className="col-md-7 pe-5">
                    <h2 className="fs-3 fw-normal mb-4" style={{ lineHeight: "1.4" }}>
                        Search for an answer or browse help topics to create a ticket
                    </h2>
                    
                    {/* Larger Input Box with Rounded Corners */}
                    <div className="mb-4">
                        <input 
                            type="text" 
                            className="form-control form-control-lg rounded-3 py-3 shadow-sm" 
                            placeholder='Eg: how do i activate F&O, why is my order getting rejected..' 
                        />
                    </div>

                    {/* Spaced out Quick Links */}
                    <div className="d-flex flex-wrap gap-3 mt-3">
                        <a href="" className="text-white text-decoration-underline">Track account opening</a>
                        <a href="" className="text-white text-decoration-underline">Track segment activation</a>
                        <a href="" className="text-white text-decoration-underline">Intraday</a>
                        <a href="" className="text-white text-decoration-underline">margins</a>
                        <a href="" className="text-white text-decoration-underline">Kite user manual</a>
                    </div>
                </div>

                {/* Right Column: Featured Topics */}
                <div className="col-md-5 ps-4">
                    <h2 className="fs-3 fw-normal mb-4">Featured</h2>
                    <ol className="ps-3" style={{ lineHeight: "2.2" }}>
                        <li className="mb-2">
                            <a href="" className="text-white text-decoration-underline fs-5">Current Takeovers and Delisting - January 2026</a>
                        </li>
                        <li className="mb-2">
                            <a href="" className="text-white text-decoration-underline fs-5">Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;