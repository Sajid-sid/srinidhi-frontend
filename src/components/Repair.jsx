import React from "react";
import "./Repair.css";
import RepairBanner from "../assets/repair.webp";
import RepairTech from "../assets/repairtech.webp";


function Repair() {
  return (
    <>
    <section className="repair-banner">
      <img src={RepairBanner} alt="AC Repair services"/>
      <div className="repair-overlay">
        <h1>AC Repair services</h1>
       
      </div>
      </section>

       <section className="repair-intro">
        <div className="repair-container">
          <h2>Expert AC Repair Services</h2>

         <p> Srinidhi HVAC offers reliable air conditioning service, maintenance, and repair solutions to ensure smooth and efficient operation of your cooling systems.
           Our expert technicians diagnose issues accurately and deliver quick, cost-effective solutions to minimize downtime.
         We provide preventive maintenance to improve performance, reduce energy consumption, and extend equipment life, 
         along with prompt breakdown repair services using genuine spare parts. Our maintenance programs are designed to keep your AC systems running at peak efficiency throughout the year.</p>
          
        </div>
      </section>
      <section className="repair-services">

  <div className="service-box">
    <div className="service-icon">🛠️</div>
    <h3>Preventive Maintenance</h3>
    <p>
      Regular inspections and servicing to ensure optimal performance
      and prevent unexpected breakdowns.
    </p>
  </div>

  <div className="service-box">
    <div className="service-icon">❄️</div>
    <h3>AC Repair</h3>
    <p>
      Quick diagnosis and efficient repair services to restore cooling
      with minimal downtime.
    </p>
  </div>

  <div className="service-box">
    <div className="service-icon">🧹</div>
    <h3>Deep Cleaning</h3>
    <p>
      Thorough cleaning of filters, coils, and drains to improve air
      quality and efficiency.
    </p>
  </div>
  </section>
  <section className="repair-info-section">
   <div className="repair-info-image">
        <img src={RepairTech} alt="AC Repair Technician" />
    </div>
    <div className="repair-info-content">

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
         </div>
         </section>
 </>
  );
}

export default Repair;
      