import React from 'react'
import './Locate.css'
const Location = () => {
  return (
    <div className='container-fluid mt-md-5 '>
        <div className="row loc d-flex justify-content-center align-items-center flex-column flex-lg-row pb-5">
            <div className="col-12 col-lg-4 bg-none  py-2 py-lg-5">
                <div className="row py-2 py-lg-5">
                    <h1>Locate Us</h1>
                </div>
                <div className="row py-3 d-none d-lg-block">
                    <h2><span>-</span>All Objects</h2>
                </div>
                <div className="row py-3 d-none d-lg-block" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h2>Restaurants</h2>
                </div>
                <div className="row py-3 d-none d-lg-block" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
                    <h2>Shops</h2>
                </div>
                <div className="row py-3 d-none d-lg-block" data-aos="fade-up" data-aos-duration="1400" data-aos-once="true">
                    <h2>Sport</h2>
                </div>
                <div className="row py-3 d-none d-lg-block" data-aos="fade-up" data-aos-duration="1600" data-aos-once="true">
                    <h2>Formation</h2>
                </div>
                
            </div>
            <div className="col-12 col-lg-6 bg-none">
                <div className="row mt-lg-5 pt-lg-5">
                    <div className="col-md-6 fs-5">
                        <p>Abuja City, World Trade Center, famous theaters, museums, the best restaurants - the center of Nigeria.</p>
                    </div>
                    <div className="col-md-6 fs-5">
                        <p>The ideal location in a quiet alley provides a feeling of strawberry and privacy to the owners of the Moonlight house.</p>
                    </div>
                </div>
                <div className="col-12 bg-secondary" data-aos="fade-up" data-aos-once="true">
                <div id="map-container-google-1" className="z-depth-1-half map-container map" >
                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Location