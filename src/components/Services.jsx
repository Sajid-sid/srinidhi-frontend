import React from 'react'
import Repair from "../assets/sri-6.webp";
import service from "../assets/ac_service.webp";
import "./Services.css"
export default function services() {
  return (
    <>
    <div className='service'>
      <h1>Our Services</h1>
      <h2>Complete Air Conditioning & HVAC Solutions</h2>
      <div className='para'>
      <p>At Srinidhi Comfort Solutions, we provide end-to-end air conditioning and HVAC services <br/> for residential, commercial, industrial, healthcare, hospitality, and institutional projects.<br/> From system design and equipment supply to installation, maintenance, and repairs,<br/> our experienced team ensures reliable, energy-efficient, and long-lasting cooling solutions.<br/><br/>
Whether you need a single split AC for your home or a complete HVAC system for a commercial facility, <br/>we deliver customized solutions that match your space, budget, and cooling requirements.
</p>
</div>
    <h3>Air Conditioner Sales</h3>
    <img src={service}/>
    <div className='para'>
    <p>We supply premium-quality air conditioning systems from trusted brands for every type of application.</p>
    </div>
    <h4>Our range includes:</h4>
   <ul>
    <li>Split Air Conditioners</li>
    <li>Inverter Air Conditioners</li>
    <li>Cassette AC Systems</li>
    <li>Ductable Air Conditioners</li>
    <li>Tower Air Conditioners</li>
    <li>VRF/VRV Air Conditioning Systems</li>
    <li>Packaged Air Conditioning Units</li>
    <li>Commercial HVAC Equipment</li>
   </ul>
   <div className='para'>
   <p>We help you select the right capacity and model to maximize cooling performance while reducing energy consumption.</p>
   </div>
   <h3>AC Installation Services</h3>
   <div className='para'>
    <p>Proper installation is essential for the efficiency and lifespan of your air conditioner</p>
   </div>
   <h4>Our installation services include:</h4>
   <ul>
    <li>Residential AC Installation</li>
    <li>Commercial AC Installation</li>
    <li>Multi-Split System Installation</li>
    <li>Ductable AC Installation</li>
    <li>VRF/VRV System Installation</li>
    <li>Piping and Drainage Work</li>
    <li>Electrical Connections</li>
    <li>System Testing &amp; Commissioning</li>
   </ul>
   <h3>AC Repair & Troubleshooting</h3>
<img src={Repair} className='repair'/>
<div className='para'>
   <p>Experiencing poor cooling, water leakage, unusual noise, or compressor issues?<br/>
      Our skilled technicians quickly diagnose and repair all major AC brands and models.
</p>
</div>
<p>We handle:</p>
<ul>
  <li>Cooling Problems</li>
  <li>Compressor Repairs</li>
  <li>Refrigerant Gas Leakage</li>
  <li>PCB & Electrical Repairs</li>
  <li>Fan Motor Replacement</li>
  <li>Thermostat Issues</li>
  <li>Sensor Failures</li>
  <li>Water Leakage Repairs</li>
  <li>Emergency Breakdown Services</li>
</ul>
<div className='para'>
<p>Our goal is to restore your comfort with minimal downtime.</p>
</div>
</div>
    </>
  )
}
