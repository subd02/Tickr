import React from 'react';
function LeftSection({imageURL, name, desc, demo, learn, play, app}) {
    return ( 
        <div className="container">
            <div className="row p-5">
                <div className="col-6">
                    <img className='img-fluid' src={imageURL} alt="" />
                </div>
                <div className="col-6 mt-5">
                    <h2>{name}</h2>
                    <br />
                    <p>{desc}</p>
                    <br /><br />
                    <a className='text-decoration-none' href={demo}>Try Demo</a> &nbsp;&nbsp;&nbsp;
                    <a className='text-decoration-none' href={learn}>Learn More</a>
                    <br /><br />
                    <a href={play}><img src="/media/googlePlayBadge.svg" alt="" /></a>
                    &nbsp;&nbsp;&nbsp;
                    <a href={app}><img src="/media/appstoreBadge.svg" alt="" /></a>

                </div>
            </div>
        </div>
     );
}

export default LeftSection;