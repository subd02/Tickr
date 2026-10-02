import React from 'react';

function Stats() {
    return (
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-5">
                    <h3 className='text-muted'>Trust with confidence</h3>
                    <br />
                    <h4 className='mb-3'>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.8+ crore customers trust Tickr with ~ ₹9 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <br />
                    <h4 className='mb-3'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#" className=' text-decoration-none'>Our philosophies.</a> </p>
                    <br />
                    <h4 className='mb-3'>The Tickr universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <br />
                    <h4 className='mb-3'>Do better with money</h4>
                    <p className='text-muted'>With initiatives like <a href="" className=' text-decoration-none'>Nudge</a> and <a href="" className=' text-decoration-none'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-7 text-centre">
                    <img src="media/ecosystem.png" width={"600px"} alt="" />
                    <p className='text-center mt-4'>
                        <a href="" className='mx-3 text-decoration-none'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" className='mx-3 text-decoration-none'>Try Tickr Demo <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Stats;