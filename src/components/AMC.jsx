import React from "react";
import { motion } from "framer-motion";
import "./AMC.css";
import AMCSBanner from "../assets/AMCsbanner.webp";
import AMCBenefitimage from "../assets/amcbenifitimage.webp";
function AMCs() {
  return (
    <>
    <motion.section className="AMCs-banner"
    className="AMCs-banner"
    initial={{ opacity:0, scale:0.9 }}
    animate={{ opacity:1, scale:1 }}
    transition={{ duration:1 }}
    >
      <img src={AMCSBanner} alt="amcs"/>
      <div className="amc-services">
        <h1>AMC'S</h1>
</div>
    </motion.section>
    <section className="amc-section">
    <motion.div className="amc-card"
      initial={{
        x:-150,
        opacity:0,
        scale:0.8
    }}

    whileInView={{
        x:0,
        opacity:1,
        scale:1
    }}

    transition={{
        duration:1
    }}

    viewport={{
        once:true
    }}

    whileHover={{
        scale:1.05,
        y:-10
    }}
  
    >
      <h3>Types of AMC'S</h3>
      <ul>
        <li>✔ Comprehensive AMC</li>
            <li>✔ Preventive Maintenance AMC</li>
            <li>✔ Residential AMC</li>
            <li>✔ Commercial AMC</li>
            <li>✔ Industrial AMC</li>
            <li>✔ Non-Comprehensive AMC</li>
      </ul>
</motion.div>
<div className="amc-content">
  <motion.h3
  initial={{
        y:-50,
        opacity:0
    }}

    whileInView={{
        y:0,
        opacity:1
    }}

    transition={{
        duration:.8
    }}

    viewport={{
        once:true
    }}
  >AMC'S</motion.h3>
  <p>At Srinidhi Comfort Solutions, our Annual Maintenance Contracts
            are designed to ensure smooth, efficient, and uninterrupted
            performance of your air conditioning and HVAC systems
            throughout the year. </p>
       <p>
            With regular preventive maintenance and expert support,
            we help extend equipment life, improve cooling efficiency,
            reduce energy consumption, and minimize unexpected
            breakdowns while ensuring maximum comfort.
        </p>

</div>
    </section>
    <motion.section className="amc-benefits-heading"
    initial={{
        y:-50,
        opacity:0
    }}

    whileInView={{
        y:0,
        opacity:1
    }}

    transition={{
        duration:.8
    }}

    viewport={{
        once:true
    }}
    >
      <h3>AMC 'S  Benefits</h3>
      <motion.div className="heading-line"
      initial={{
        width:0
    }}

    whileInView={{
        width:180
    }}

    transition={{
        duration:1
    }}

    viewport={{
        once:true
    }}
      ></motion.div>
    </motion.section>
    <section className="amc-benifits">
     
        <div className="amc-benifits-content">
           <h2>projection maintenance agreements </h2>
     <p>At Srinidhi, we understand that regular maintenance is the key to optimal performance
       and longevity of your HVAC systems.
        Our Projection Maintenance Agreements (PMAs) are designed to provide proactive care for your air conditioning units,
         ensuring they run efficiently and reliably throughout the year.
     With Srinidhi’s PMAs, businesses and homeowners alike can enjoy uninterrupted comfort while protecting their investment.
      Choose a maintenance plan tailored to your needs and experience hassle-free, year-round cooling and heating performance.</p>

        </div>
         <motion.div className="amc-benifits-image"
             initial={{
        opacity:0,
        scale:0.7,
        rotate:-10
    }}

    whileInView={{
        opacity:1,
        scale:1,
        rotate:0
    }}

    transition={{
        duration:1.2
    }}

    viewport={{
        once:true
    }}

    whileHover={{
        scale:1.05,
        rotate:2
    }}

         >
        <img src={AMCBenefitimage} alt ="AMC Benefits"/>

      </motion.div>
    </section>
    </>
  );
}

export default AMCs;