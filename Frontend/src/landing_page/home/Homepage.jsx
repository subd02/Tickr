import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Edu from './Edu';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Homepage() {
    return ( 
        <>
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Edu/>
        <OpenAccount/>
        
        </>
     );
}

export default Homepage;