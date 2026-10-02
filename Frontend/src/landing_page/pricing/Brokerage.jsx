import React from 'react';

function Brokerage() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row text-center">
                <div className="col-7">
                    <h5>Brokerage Calculator</h5>
                    <br /><br />
                    <ul className='text-start'>
                        <li><p>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</p></li>
                        <li><p>Digital contract notes will be sent via e-mail.</p></li>
                        <li><p>Physical copies of contract notes, if required, shall be charged 20 per contract note. Courier charges apply.</p></li>
                        <li><p>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</p></li>
                        <li><p>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</p></li>
                        <li><p>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of 20 per executed prder.</p></li>
                        
                    </ul>
                </div>
                <div className="col-5">
                    <h5>List of Charges</h5>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;