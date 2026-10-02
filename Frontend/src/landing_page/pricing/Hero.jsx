import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 text-center">
                <h1 className="fs-1 text-muted fw-normal">Charges</h1>
                <h3 className=" fs-5 mt-3 fw-normal">List of all charges and taxes</h3>
            </div>

            <div className="row p-5 text-center">
                <div className="col-4 p-4">
                    <img src="/media/pricing0.svg" alt="Free equity delivery" className="img-fluid" />
                    <h2 className="fs-4 mt-4 text-muted">Free equity delivery</h2>
                    <p className="text-muted mt-3" style={{ fontSize: "14px", lineHeight: "1.8" }}>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                
                <div className="col-4 p-4">
                    <img src="/media/pricingEquity.svg" alt="Intraday and F&O trades" className="img-fluid" />
                    <h2 className="fs-4 mt-4 text-muted">Intraday and F&O trades</h2>
                    <p className="text-muted mt-3" style={{ fontSize: "14px", lineHeight: "1.8" }}>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹ 20 on all option trades.
                    </p>
                </div>
                
                <div className="col-4 p-4">
                    <img src="/media/pricing0.svg" alt="Free direct MF" className="img-fluid" />
                    <h2 className="fs-4 mt-4 text-muted">Free direct MF</h2>
                    <p className="text-muted mt-3" style={{ fontSize: "14px", lineHeight: "1.8" }}>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;