import React from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import OpenAccount from "../OpenAccount"

function PricingPage() {
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <hr />
            <Brokerage/>
        </>
     );
}

export default PricingPage;