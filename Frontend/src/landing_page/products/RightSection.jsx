import React from 'react';
function RightSection({imageURL, name, desc, learn}) {
    return ( 
        <div className="container">
            <div className="row ">
                <div className="col-6 mt-5">
                    <h2>{name}</h2>
                    <br />
                    <p>{desc}</p>
                    <br /><br />
                    <a className='text-decoration-none' href={learn}>Learn More</a>
                </div>
                <div className="col-6 ">
                    <img className='img-fluid' src={imageURL} alt="" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;