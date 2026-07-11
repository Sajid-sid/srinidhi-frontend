import React from 'react';
import "./Contact.css";
import ContactBanner from "../assets/contactbanner.webp";
import Contactimage from "../assets/contactimg.webp";

function Contact(){
    return(
        <>
    <section className='contact-banner'>
        <img src = {ContactBanner} alt="contact us"/>
        
    </section>
    <section className="contact-details">
        <div className="contact-card">
            <h2>Address</h2>
            <p>Door No : 6-3-709/A/11,<br/>
               Ground Floor, Exide Battery Lane,<br/>
               Panjagutta, Hyderabad-500082
            </p>
        </div>
        <div className="contact-card">
        <h2>Contact information</h2>
        <div className='information'>
        <p>
            <strong>Phone:</strong> +91 9666466660
        </p>
        </div>
        <p> 
            <strong>Landline:</strong>040-4519-5642
        </p>
        <p>
            <strong>Email :</strong>
           srinidhicomfort@gmail.com

        </p>
        </div>
    </section>
    <section className="contact-form-section">
        <div className="contact-form">
            <form>
        <label>Name<span>*</span></label>
        <div className="name-fields">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
        </div>

        <label>Email<span>*</span></label>
        <input type="email" placeholder="Enter Email"/>

        <label>Phone Number<span>*</span></label>
        <input type="tel" placeholder="Enter Phone Number"/>

        <label>Type of Product</label>
        <select>
        <option>Select Type of product</option>
        <option>Split Systems</option>
        <option>Window</option>
        <option>Cassette</option>
        <option>Duck</option>
        <option>VRF Systems</option>
        </select>
        <label>Message</label>
        <textarea
           rows="6"
           placeholder="Enter your message...">
           </textarea>
        <button type="submit">Submit</button>
            </form>
        </div>
   <div className="contact-form-image">
    <img src={Contactimage} alt="customer-Support"/>
   </div>
    </section>


        </>
    )
}
export default Contact;