import React from 'react';

function Universe() {
    return ( 
        <div className="container p-5 text-center">
            <h2 className=" fs-2">The Tickr Universe</h2>
            <p className="text-muted fs-5 mb-5">Extend your trading and investment experience even further with our partner platforms</p>
            
            {/* First Row */}
            <div className="row text-center">
                <div className="col-4 p-3">
                    <img src="/media/zerodhaFundhouse.png" style={{ width: "150px" }} alt="Fund House" />
                    <p className="text-muted mt-2" style={{ fontSize: "13px" }}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="/media/sensibullLogo.svg" style={{ width: "150px" }} alt="Sensibull" />
                    <p className="text-muted mt-2" style={{ fontSize: "13px" }}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="/media/tijori.svg" style={{ width: "120px" }} alt="Tijori" />
                    <p className="text-muted mt-2" style={{ fontSize: "13px" }}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>

            {/* Second Row */}
            <div className="row text-center mt-4">
                <div className="col-4 p-3">
                    <img src="/media/streakLogo.png" style={{ width: "130px" }} alt="Streak" />
                    <p className="text-muted mt-2" style={{ fontSize: "13px" }}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="/media/smallcaseLogo.png" style={{ width: "130px" }} alt="Smallcase" />
                    <p className="text-muted mt-2" style={{ fontSize: "13px" }}>Thematic investing platform that helps you invest in diversified baskets of stocks and ETFs.</p>
                </div>
                <div className="col-4 p-3">
                    <img src="/media/dittoLogo.png" style={{ width: "100px" }} alt="Ditto" />
                    <p className="text-muted mt-2" style={{ fontSize: "13px" }}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>

            <button className="btn btn-primary fs-5 mt-4 mb-5 px-4 py-2" style={{ width: "200px", margin: "0 auto" }}>Sign up for free</button>
        </div>
     );
}

export default Universe;