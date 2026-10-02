import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <>
            <Hero/>
            <LeftSection imageURL="media/kite.png" name="Kite" desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." demo="" learn="" play="" app=""/>

            <RightSection imageURL="media/console.png" name="Console" desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learn="" />

            <LeftSection imageURL="media/varsity.png" name="Varsity" desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." demo=""  learn="" play="" app=""/>

            <RightSection imageURL="media/kiteconnect.png" name="Kite Connect Api" desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."learn=""/>            

            <LeftSection imageURL="media/coin.png" name="Coin" desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." demo=""  learn="" play="" app=""/>

            <Universe/>
        </>
     );
}

export default ProductPage;