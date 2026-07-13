import React from "react";
import { motion } from "framer-motion";
import "./Repair.css";
import RepairBanner from "../assets/repair.webp";
import RepairTech from "../assets/repairtech.webp";


function Repair() {
  return (
    <>
    <motion.section 
    className="repair-banner"
    initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
    >
      <img src={RepairBanner} alt="AC Repair services"/>
      <div className="repair-overlay">
        <h1>AC Repair services</h1>
       
      </div>
      </motion.section>

       <section className="repair-intro">
        <div className="repair-container">
          <motion.h2
          initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
          >Expert AC Repair Services</motion.h2>

         <motion.p
         initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
    viewport={{ once: true }} >
          Srinidhi HVAC offers reliable air conditioning service, maintenance, and repair solutions to ensure smooth and efficient operation of your cooling systems.
           Our expert technicians diagnose issues accurately and deliver quick, cost-effective solutions to minimize downtime.
         We provide preventive maintenance to improve performance, reduce energy consumption, and extend equipment life, 
         along with prompt breakdown repair services using genuine spare parts. Our maintenance programs are designed to keep your AC systems running at peak efficiency throughout the year.</motion.p>
          
        </div>
      </section>
      <section className="repair-services">

  <motion.div 
  className="service-box"
  initial={{ rotateY: -90, opacity: 0 }}
    whileInView={{ rotateY: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{
        y: -10,
        scale: 1.05
    }}
  >
    <motion.div className="service-icon"
    animate={{
        y:[0,-8,0]
    }}

    transition={{
        repeat:Infinity,
        duration:2
    }}
>
    🛠️
    </motion.div>
    <h3>Preventive Maintenance</h3>
    <p>
      Regular inspections and servicing to ensure optimal performance
      and prevent unexpected breakdowns.
    </p>
  </motion.div>

  <motion.div className="service-box"
  initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: [100, -20, 0], opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    whileHover={{
        scale: 1.05
    }}
  >
    <motion.div className="service-icon"
    animate={{
        y:[0,-8,0]
    }}

    transition={{
        repeat:Infinity,
        duration:2
    }}
>
    ❄️</motion.div>
    <h3>AC Repair</h3>
    <p>
      Quick diagnosis and efficient repair services to restore cooling
      with minimal downtime.
    </p>
  </motion.div>

  <motion.div className="service-box"
  initial={{ rotateY: 90, opacity: 0 }}
    whileInView={{ rotateY: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{
        y: -10,
        scale: 1.05
    }}
  >
    <motion.div className="service-icon"
    animate={{
        y:[0,-8,0]
    }}

    transition={{
        repeat:Infinity,
        duration:2
    }}
>
    🧹</motion.div>
    <h3>Deep Cleaning</h3>
    <p>
      Thorough cleaning of filters, coils, and drains to improve air
      quality and efficiency.
    </p>
  </motion.div>
  </section>
  <section className="repair-info-section">
   <motion.div 
   className="repair-info-image"
   initial={{
        opacity:0,
        rotate:-10,
        scale:0.8
    }}

    whileInView={{
        opacity:1,
        rotate:0,
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
        rotate:2
    }}
   >
        <img src={RepairTech} alt="AC Repair Technician" />
    </motion.div>
    <motion.div 
    className="repair-info-content"
    
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
        once:true
    }}
    >

        <h2>Professional AC Repair & Maintenance</h2>

        <p>
            Srinidhi Comfort Solutions offers dependable air conditioning
            services and repair solutions to keep your cooling systems
            running efficiently throughout the year. Our experienced HVAC
            technicians diagnose issues accurately and provide quick,
            cost-effective repairs with minimal downtime.
        </p>
         <p>
            We specialize in AC installation, preventive maintenance,
            emergency repairs, and Annual Maintenance Contracts (AMC).
            Using genuine spare parts and advanced diagnostic tools, we
            ensure safe, reliable, and long-lasting performance for
            residential, commercial, and industrial air conditioning
            systems.
        </p>
         </motion.div>
         </section>
 </>
  );
}

export default Repair;
      