import React from "react";
import banner from "../assets/banner.png"
import Repair from "../assets/amc.webp";
import Installation from "../assets/sri-5.webp";
import service from "../assets/ac_service.webp";
import Maintance from "../assets/ac-repair.webp";
import ventilation from "../assets/ventilation.webp";
import Cold_room from "../assets/Products.json/cold-room-cold-storage.webp";
import HAV from "../assets/sri-10.jpg";
import HAV_1 from "../assets/sri-9.jpg"
import "./Services.css";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";
export default function Services() {

  const services = [
    {
      title: "Air Conditioner Sales",
      image: service,
      description:
        "We supply premium-quality air conditioning systems from trusted brands for every type of application.",
      heading: "Our range includes:",
      list: [
        "Split Air Conditioners",
        "Inverter Air Conditioners",
        "Cassette AC Systems",
        "Ductable Air Conditioners",
        "Tower Air Conditioners",
        "VRF/VRV Air Conditioning Systems",
        "Packaged Air Conditioning Units",
        "Commercial HVAC Equipment",
      ],
      bottom:
        "We help you select the right capacity and model to maximize cooling performance while reducing energy consumption.",
    },

    {
      title: "AC Installation Services",
      image: Installation,
      description:
        "Proper installation is essential for the efficiency and lifespan of your air conditioner.",
      heading: "Our installation services include:",
      list: [
        "Residential AC Installation",
        "Commercial AC Installation",
        "Multi-Split System Installation",
        "Ductable AC Installation",
        "VRF/VRV System Installation",
        "Piping and Drainage Work",
        "Electrical Connections",
        "System Testing & Commissioning",
      ],
    },

    {
      title: "AC Repair & Troubleshooting",
      image: Repair,
      description:
        "Experiencing poor cooling, water leakage, unusual noise, or compressor issues? Our skilled technicians quickly diagnose and repair all major AC brands and models.",
      heading: "We handle:",
      list: [
        "Cooling Problems",
        "Compressor Repairs",
        "Refrigerant Gas Leakage",
        "PCB & Electrical Repairs",
        "Fan Motor Replacement",
        "Thermostat Issues",
        "Sensor Failures",
        "Water Leakage Repairs",
        "Emergency Breakdown Services",
      ],
      bottom:
        "Our goal is to restore your comfort with minimal downtime.",
    },

    {
      title: "Annual Maintenance Contracts (AMC)",
      image: Maintance,
      description:
        "Prevent unexpected breakdowns and extend the life of your cooling systems with our Annual Maintenance Contracts.",
      heading: "We handle:",
      list: [
        "Scheduled Preventive Maintenance",
        "Coil Cleaning",
        "Filter Cleaning & Replacement",
        "Refrigerant Level Inspection",
        "Electrical Safety Checks",
        "Performance Testing",
        "Priority Service Support",
        "Reduced Repair Costs",
      ],
      bottom:
        "We offer flexible AMC plans for homes, offices, commercial buildings, hospitals, hotels, and industries.",
    },

    {
      title: "HVAC Design & Turnkey Projects",
      description:
        "We provide complete HVAC turnkey solutions from planning to project completion.",
      heading: "Our services include:",
      image:HAV_1,
      list: [
        "HVAC System Design",
        "Heat Load Calculations",
        "Equipment Selection",
        "Duct Design",
        "Ventilation Systems",
        "Installation & Commissioning",
        "Testing & Balancing",
        "Project Management",
      ],
      bottom:
        "Every project is designed for maximum efficiency, indoor comfort, and long-term reliability.",
    },

    {
      title: "Ventilation Solutions",
      image: ventilation,
      description:
        "Healthy indoor air starts with proper ventilation.",
      heading: "We design and install:",
      list: [
        "Fresh Air Systems",
        "Exhaust Systems",
        "Basement Ventilation",
        "Industrial Ventilation",
        "Kitchen Exhaust Systems",
        "Parking Ventilation",
        "Air Distribution Systems",
      ],
      bottom:
        "Our ventilation solutions improve indoor air quality while maintaining optimal airflow.",
    },

    {
      title: "Cold Room & Refrigeration Solutions",
      description:
        "We provide customized cold storage and refrigeration systems for businesses that require temperature-controlled environments.",
      heading: "Applications include:",
      image:Cold_room,
      list: [
        "Food Processing Units",
        "Restaurants",
        "Hotels",
        "Pharmaceutical Storage",
        "Hospitals",
        "Dairy Industry",
        "Warehouses",
      ],
      bottom:
        "Our systems are designed for energy efficiency and dependable performance.",
    },
    {
      title:"Industrial & Commercial HVAC Solutions",
      image:HAV,
      description:"We execute HVAC projects for a wide range of commercial and industrial facilities, including:",
      list:[
        "Corporate Offices",
        "Shopping Malls",
        "Hospitals",
        "Hotels",
        "Educational Institutions",
        "Manufacturing Units",
        "Warehouses",
        "Retail Showrooms",
        "Data Centers"
      ],
      bottom:"Our experienced engineers ensure every installation meets the highest standards of performance and safety."
    }
  ];


  return (
    <div className="service">

      <h1>Our Services</h1>
      <img src={banner} className="banner"/>
      <h2>
        Complete Air Conditioning & HVAC Solutions
      </h2>


      <div className="para">
        <p>
          At Srinidhi Comfort Solutions, we provide end-to-end air conditioning
          and HVAC services for residential, commercial, industrial,
          healthcare, hospitality, and institutional projects.
          From system design and equipment supply to installation,
          maintenance, and repairs, our experienced team ensures reliable,
          energy-efficient, and long-lasting cooling solutions.
        </p>
      </div>


      {
        services.map((item,index)=>(
          
        <motion.div
  className={`page ${index % 2 !== 0 ? "reverse" : ""}`}
  key={index}
  initial={{ 
    opacity: 0, 
    x: index % 2 !== 0 ? 100 : -100 
  }}
  whileInView={{ 
    opacity: 1, 
    x: 0 
  }}
  transition={{ 
    duration: 0.8,
    ease: "easeOut"
  }}
  viewport={{ once: true }}
>

            <div className="page-content">

              <h3>{item.title}</h3>

              <div className="para">
                <p>{item.description}</p>
              </div>


              <h4>{item.heading}</h4>

              <ul>
                {
                  item.list.map((list,i)=>(
                    <li key={i}>{list}</li>
                  ))
                }
              </ul>


              {
                item.bottom &&
                <div className="para">
                  <p>{item.bottom}</p>
                </div>
              }

            </div>



            {
              item.image &&
              <div className="page-image">
                <img src={item.image}/>
              </div>
            }

          </motion.div>

        ))
      }
      <div className="choose-section">
      <h3>Why Choose Srinidhi Comfort Solutions?</h3>
      <ul>
        <li>Experienced HVAC Professionals</li>
        <li>Customized Cooling Solutions</li>
        <li>High-Quality Products</li>
        <li>Professional Installation</li>
        <li>Prompt Repair Services</li>
        <li>Preventive Maintenance Programs</li>
        <li>Energy-Efficient Systems</li>
        <li>Transparent Pricing</li>
        <li>Timely Project Delivery</li>
        <li>Dedicated Customer Support</li>
      </ul>
      </div>
    </div>
  );
}