import React from "react";
import "./AMC.css";
import AMCSBanner from "../assets/AMCsbanner.webp";
import AMCBenefitimage from "../assets/amcbenifitimage.webp";
function AMCs() {
  return (
    <>
    <section className="AMCs-banner">
      <img src={AMCSBanner} alt="amcs"/>
      <div className="amc-services">
        <h1>AMC'S</h1>
</div>
    </section>
    <section className="amc-section">
    <div className="amc-card">
      <h3>Types of AMC'S</h3>
      <ul>
        <li>✔ Comprehensive AMC</li>
            <li>✔ Preventive Maintenance AMC</li>
            <li>✔ Residential AMC</li>
            <li>✔ Commercial AMC</li>
            <li>✔ Industrial AMC</li>
            <li>✔ Non-Comprehensive AMC</li>
      </ul>
</div>
<div className="amc-content">
  <h3>AMC'S</h3>
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
    <section className="amc-benefits-heading">
      <h3>AMC 'S  Benefits</h3>
      <div className="heading-line"></div>
    </section>
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
         <div className="amc-benifits-image">
        <img src={AMCBenefitimage} alt ="AMC Benefits"/>

      </div>
    </section>
    </>
  );
}

export default AMCs;