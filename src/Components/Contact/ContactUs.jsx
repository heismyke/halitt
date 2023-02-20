import React from 'react'
import contactUs from './ContactImages/contactus.jpg'
import './Contact.css'

const ContactUs = () => {
  return (
    <div className='container-fluid bg-white p-5'>
        <div className="row">
            <div className="col-lg-4  d-flex justify-content-lg-center align-items-lg-center flex-column p-lg-5">
                <div className='d-flex justify-content-center align-items-center flex-column'><h2>CONTACT US</h2></div>
                <div>
                <div className='d-flex flex-column justify-content-center align-items-center col-6'>
                <div className='py-3'>
                    <input type="text"  placeholder='Fullname'/>
                </div>
                <div className='py-3'>
                    <input type="text"  placeholder='Email'/>
                </div>
                <div className='py-3'>
                    <input type="text"  placeholder='Subject'/>
                </div>
                </div>
                <div className='py-3 d-flex justify-content-center align-items-center'>
                  
                    <textarea name="message" id="message" cols="29" rows="10" placeholder='message'></textarea>
                </div>
                <div className='py-2'>
                    <input type="submit"  value="Submit" className='bg-dark text-white p-2 px-5'/>
                </div>
                </div>
            </div>
            <div className="col-lg-8 ">
                <div className='p-lg-5 d-lg-block d-none'>
                    <img src={contactUs} alt="contact" className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs