import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container mt-5">
            {/* Main Header */}
            <div className="row mb-5">
                <h3 className="text-muted fw-normal fs-4">
                    To create a ticket, select a relevant topic
                </h3>
            </div>

            {/* First Row of Categories */}
            <div className="row mb-5">
                {/* Column 1: Account Opening */}
                <div className="col-md-4">
                    <h4 className="fs-5 mb-4 fw-normal">
                        <i className="fa fa-plus-circle text-muted me-2" aria-hidden="true"></i> Account Opening
                    </h4>
                    <ul className="list-unstyled lh-lg">
                        <li><a href="" className="text-decoration-none">Online Account Opening</a></li>
                        <li><a href="" className="text-decoration-none">Offline Account Opening</a></li>
                        <li><a href="" className="text-decoration-none">Company, Partnership and HUF Account Opening</a></li>
                        <li><a href="" className="text-decoration-none">NRI Account Opening</a></li>
                        <li><a href="" className="text-decoration-none">Charges at Zerodha</a></li>
                        <li><a href="" className="text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                        <li><a href="" className="text-decoration-none">Getting Started</a></li>
                    </ul>
                </div>

                {/* Column 2: Your Zerodha Account */}
                <div className="col-md-4">
                    <h4 className="fs-5 mb-4 fw-normal">
                        <i className="fa fa-user text-muted me-2" aria-hidden="true"></i> Your Zerodha Account
                    </h4>
                    <ul className="list-unstyled lh-lg">
                        <li><a href="" className="text-decoration-none">Login Credentials</a></li>
                        <li><a href="" className="text-decoration-none">Account Modification and Segment Addition</a></li>
                        <li><a href="" className="text-decoration-none">DP ID and bank details</a></li>
                        <li><a href="" className="text-decoration-none">Your Profile</a></li>
                        <li><a href="" className="text-decoration-none">Transfer and conversion of shares</a></li>
                    </ul>
                </div>

                {/* Column 3: Trading / Kite */}
                <div className="col-md-4">
                    <h4 className="fs-5 mb-4 fw-normal">
                        <i className="fa fa-bar-chart text-muted me-2" aria-hidden="true"></i> Your Zerodha Account
                    </h4>
                    <ul className="list-unstyled lh-lg">
                        <li><a href="" className="text-decoration-none">Margin/leverage, Product and Order types</a></li>
                        <li><a href="" className="text-decoration-none">Kite Web and Mobile</a></li>
                        <li><a href="" className="text-decoration-none">Trading FAQs</a></li>
                        <li><a href="" className="text-decoration-none">Corporate Actions</a></li>
                        <li><a href="" className="text-decoration-none">Sentinel</a></li>
                        <li><a href="" className="text-decoration-none">Kite API</a></li>
                        <li><a href="" className="text-decoration-none">Pi and other platforms</a></li>
                        <li><a href="" className="text-decoration-none">Stockreports+</a></li>
                        <li><a href="" className="text-decoration-none">GTT</a></li>
                    </ul>
                </div>
            </div>

            {/* Second Row of Categories */}
            <div className="row mb-5">
                {/* Column 1: Funds */}
                <div className="col-md-4">
                    <h4 className="fs-5 mb-4 fw-normal">
                        <i className="fa fa-credit-card text-muted me-2" aria-hidden="true"></i> Funds
                    </h4>
                    <ul className="list-unstyled lh-lg">
                        <li><a href="" className="text-decoration-none">Adding Funds</a></li>
                        <li><a href="" className="text-decoration-none">Fund Withdrawal</a></li>
                        <li><a href="" className="text-decoration-none">eMandates</a></li>
                        <li><a href="" className="text-decoration-none">Adding Bank Accounts</a></li>
                    </ul>
                </div>

                {/* Column 2: Console */}
                <div className="col-md-4">
                    <h4 className="fs-5 mb-4 fw-normal">
                       <i class="fa-solid fa-terminal"></i> Console
                    </h4>
                    <ul className="list-unstyled lh-lg">
                        <li><a href="" className="text-decoration-none">Reports</a></li>
                        <li><a href="" className="text-decoration-none">Ledger</a></li>
                        <li><a href="" className="text-decoration-none">Portfolio</a></li>
                        <li><a href="" className="text-decoration-none">60 Day Challenge</a></li>
                        <li><a href="" className="text-decoration-none">IPO</a></li>
                        <li><a href="" className="text-decoration-none">Referral Program</a></li>
                    </ul>
                </div>

                {/* Column 3: Coin */}
                <div className="col-md-4">
                    <h4 className="fs-5 mb-4 fw-normal">
                        <i class="fa-solid fa-coins"></i> Coin
                    </h4>
                    <ul className="list-unstyled lh-lg">
                        <li><a href="" className="text-decoration-none">Understanding Mutual Funds</a></li>
                        <li><a href="" className="text-decoration-none">About Coin</a></li>
                        <li><a href="" className="text-decoration-none">Buying and Selling through Coin</a></li>
                        <li><a href="" className="text-decoration-none">Starting an SIP</a></li>
                        <li><a href="" className="text-decoration-none">Managing your Portfolio</a></li>
                        <li><a href="" className="text-decoration-none">Coin App</a></li>
                        <li><a href="" className="text-decoration-none">Moving to Coin</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;