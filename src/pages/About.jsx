
import React from "react";
import { motion } from "framer-motion";

import AboutImage from "../assets/aboutimage.webp"
import MissionImage from "../assets/missionimage.webp";
import VisionImage from "../assets/visionimage.webp"
import "./About.css";
const About = () => {
    

  return (
    <>
    <motion.section
     className="about-company"
     initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}  
  >
        
    <motion.div 
    className="about-img"
    initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
    >
       
          <img src={AboutImage}/>
          
    </motion.div>

    <motion.div 
    className="about-page"
     initial={{ opacity: 0, x: 100 }}
     whileInView={{ opacity: 1, x: 0 }}
     transition={{ duration: 1 }}
     viewport={{ once: true }}
    >
         <h1> Srinidhi Comfort Solutions</h1>
         <p>  Since 2010, Srinidhi Comfort Solutions, located at Kachiguda, Hyderabad, Telangana,
             Authorized Wholesale Dealer and trader of Toshiba VRF SMMS-E Air Conditioning Unit,
             Carrier Superia Split Air Conditioner, Toshiba Cassette Digital Air Conditioner and many more.
             Our organization is a Sole Proprietorship based entity, fully furnished with technically sound equipment
             and other obligatory facilities that support us to deliver best quality products in the market. 
             Our understanding in this domain has always supported us to build best in class products at better prices with no compromise on superiority.
              We are also providing AC Installation Service.</p>
</motion.div>
</motion.section>

<motion.section 
className="mission-section"
initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
>

  <div className="mission-img">

          <img src={MissionImage}/>
    </div>
<div className="mission-content">
  <h1>our mission</h1>
  <p>Quality and customer trust are at the core of everything we do.
     We follow industry best practices, use high-quality components, and partner with reliable brands to ensure long-lasting performance.
     Our team is dedicated to timely execution, transparent communication, and dependable after-sales support.</p>
      <p>
      At Srinidhi Comfort Solutions, our mission is to provide reliable,
      energy-efficient, and innovative HVAC solutions that enhance comfort,
      safety, and productivity. We are committed to delivering high-quality
      products and exceptional services while building long-term relationships
      with our customers through trust, integrity, and customer satisfaction.
    </p>
</div>
</motion.section>

<motion.section
 className="vision-section"
 initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
 >
 
   
  
    <div className="vision-content">
    
        <h2>Our Vision</h2>

        <p>
            To become a preferred HVAC solutions provider by delivering
            innovative, sustainable, and high-performance air conditioning
            systems that enhance comfort and productivity.
        </p>
       <div className="srinidhi">
        <h3>Why Choose Srinidhi AC?</h3>
      </div>
        <ul>
            <li>Experienced HVAC Professionals</li>
            <li>Customized & Energy-Efficient Solutions</li>
            <li>Reliable Installation & Maintenance Support</li>
            <li>Focus on Quality, Safety & Performance</li>
            <li>Customer-First Approach</li>
        </ul>
    </div>

    <div className="vision-image">
        <img src={VisionImage} alt="Our Vision" />
    </div>

</motion.section>
</>
)}
export default About;