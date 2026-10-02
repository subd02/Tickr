import React from 'react';

function Team() {
    return ( 
        <div className="container p-5">
            {/* Added justify-content-center to center and pull columns together */}
            <div className="row justify-content-center align-items-center">
                <h4 className="text-center mb-5">People</h4>
                
                <div className="col-md-4 text-center text-muted">
                    <img className='rounded-circle mb-3' src="/media/Founde.jpg" alt="Subhayu Dutta" width="200px" />
                    <h6 className="fw-bold text-dark">Subhayu Dutta</h6>
                    <p>Full Stack Dev</p>
                </div>

                <div className="col-md-6 text-start text-muted">
                    <p>Subhayu is a full-stack web developer who built Tickr to solve the complexities and limitations traders face when tracking real-time market movements. Today, Tickr is transforming how investors monitor, analyze, and manage their portfolios through a seamless, high-performance interface.</p>
                    <p>He is the core architect of Tickr's comprehensive data pipeline, specializing in scalable backend infrastructures and highly responsive user interfaces.</p>
                    <p>Building optimized web platforms is his zen.</p>
                </div>
            </div>
        </div>
     );
}

export default Team;