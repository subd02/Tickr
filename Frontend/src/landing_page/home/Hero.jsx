import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                    <img src="media/homeHero.png" alt="Hero image" className='mb-5'/>
                    
                        <h3 className='mt-p5'>Invest in Everything</h3>
                        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                        <button type="button" class="btn btn-outline-primary" style={{width:"25%", margin:"0 auto"}}>Signup</button>
            </div>
        </div>
     );
}

export default Hero;