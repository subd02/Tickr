import React from 'react';

function Awards() {
    return ( 
        <div className='container p-5 mt-3 mb-5'>
            <div className='row'>
                <div className="col-6">
                    <img src="media/largestBroker.svg" alt="" />
                </div>
                <div className="col-6">
                    <br />
                    <h3>Largest stock broker in India</h3>
                    <br />
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <br /><br />
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Future and Option</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Future and Option</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    
                    <img src="media/pressLogos.png" alt="" width={"400px"}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;