import React from 'react';
import { motion } from "framer-motion";
import "./Contact.css";
import ContactBanner from "../assets/contactbanner.webp";
import Contactimage from "../assets/contactimg.webp";

function Contact(){
    return(
        <>
    <motion.section className='contact-banner'
    initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
    
        <img src = {ContactBanner} alt="contact us"/>
        
    </motion.section>
    <section className="contact-details">
        <motion.div className="contact-card"
     initial={{ x: -120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
    >
        
            <h2>Address</h2>
            <p>Door No : 6-3-709/A/11,<br/>
               Ground Floor, Exide Battery Lane,<br/>
               Panjagutta, Hyderabad-500082
            </p>
        </motion.div>
        <motion.div className="contact-card"
        initial={{ x: 120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
        >
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
        </motion.div>
    </section>
    <motion.section className="contact-form-section"
     initial={{
        x:100,
        opacity:0
    }}

    whileInView={{
        x:0,
        opacity:1
    }}

    transition={{
        duration:1
    }}

    viewport={{
        once:false
    }}
    >
    
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
    
   <div className="contact-form-image"
    
   >
    <img src={Contactimage} alt="customer-Support"/>
   </div>
    </motion.section>


        </>
  )
}
export default Contact;