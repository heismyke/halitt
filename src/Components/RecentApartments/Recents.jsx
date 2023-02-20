import React from 'react'
import './Recents.css'
import { Link } from 'react-router-dom'
import onebed from './RentsImages/onebedroomOne.JPG'
import singleBed   from './RentsImages/singleroomtwo.JPG'

const Recents = () => {
  return (
    <div className='container-fluid recents text-white py-5'>
        <div className="row d-flex justify-content-center align-items-center gap-lg-5">
            <div className="col-lg-4 bg-none mb-l-5 rentContainer d-flex justify-content-lg-start align-items-lg-start justify-content-center align-items-center"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h1 className='pb-lg-5'>Available Apartments</h1>
            </div>
            <div className="col-lg-6 bg-none mt-lg-5 pt-lg-5  " data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                <h3 className='pt-5'>We offer the best deals in property renting,Halit secures your property before and after purchase.</h3>
                <h2 className='pt-5'>01- one bedroom</h2>
                <p className='pt-2'>One bedroom apartment located in kubwa Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae exercitationem magni impedit sit itaque amet sapiente aliquam modi, ad, doloremque, neque beatae ullam! Fuga repudiandae ut aut dignissimos pariatur!</p>
                <div className='d-flex justify-content-start align-items-center gap-3'>
                    <h4>For more info</h4>
                    <div className=''>
                    <Link to="/more" className='text-white'><i className="fa-solid fa-arrow-right rounded-circle border  p-3"></i></Link>
                    </div>
                    
                </div>
                <div className='mt-3 d-flex justify-content-md-center align-items-md-center  justify-content-lg-center align-items-lg-center'>
                <img src={onebed} alt="onebedroom"  className='img-fluid image'/>
                </div>
                <div className="col-lg-12 bg-none mt-lg-0 pt-lg-5 " data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                <h2 className='pt-5'>02- Single bedroom</h2>
                <p className='pt-2'>Single bedroom apartment located in kubwa Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae exercitationem magni impedit sit itaque amet sapiente aliquam modi, ad, doloremque, neque beatae ullam! Fuga repudiandae ut aut dignissimos pariatur!</p>
                <div className='d-flex justify-content-start align-items-center gap-3'>
                    <h4>For more info</h4>
                    <div className=''>
                    <Link to="/more2" className='text-white'><i className="fa-solid fa-arrow-right rounded-circle border  p-3"></i></Link>
                    </div>
                    
                </div>
                <div className='mt-3 mb-5 d-flex justify-content-md-center align-items-md-center  justify-content-lg-center align-items-lg-center'>
                <img src={singleBed} alt="onebedroom"  className='img-fluid image'/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Recents