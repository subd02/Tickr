import React from 'react';

function Pricing() {
    return (
        <div className="container mt-5">
            <div className="row p-5 align-items-center">
             
                <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                    <h2 className="fs-3 mb-3">Unbeatable pricing</h2>
                    <p className="text-muted">
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" className="text-decoration-none fw-bold">
                        See pricing &rarr;
                    </a>
                </div>

                <div className="col-lg-8 col-md-7">
                    <div className="row text-center text-md-start align-items-center">
                        
                        <div className="col-md-4 mb-4 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
                            <img src="media/pricing0.svg" alt="₹0" style={{ width: "110px" }} className="me-2" />
                            <p className="text-muted mb-0" style={{ fontSize: "11px", lineHeight: "1.2" }}>
                                Free account<br />opening
                            </p>
                        </div>

                        <div className="col-md-4 mb-4 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
                            <img src="media/pricingEquity.svg" alt="₹0" style={{ width: "110px" }} className="me-2" />
                            <p className="text-muted mb-0" style={{ fontSize: "11px", lineHeight: "1.2" }}>
                                Free equity delivery<br />& direct mutual funds
                            </p>
                        </div>

                        <div className="col-md-4 mb-4 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
                            <img src="media/intradayTrades.svg" alt="₹20" style={{ width: "110px" }} className="me-2" />
                            <p className="text-muted mb-0" style={{ fontSize: "11px", lineHeight: "1.2" }}>
                                Intraday and<br />F&O
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;