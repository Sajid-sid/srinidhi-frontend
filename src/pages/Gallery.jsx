import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";
import Gallerybanner from "../assets/gallerybanner.webp";
import Gallery1 from "../assets/sri-1.webp"
import Gallery2 from "../assets/sri-2.webp";
import Gallery3 from "../assets/sri-3.webp"
import Gallery4 from "../assets/sri-4.webp";
import Gallery5 from "../assets/sri-5.webp"
import Gallery6 from "../assets/sri-6.webp";
import Gallery7 from "../assets/amc.webp";
import Gallery8 from "../assets/innovation1.webp";
import Gallery9 from "../assets/innovation2.webp";
import Gallery10 from "../assets/sri-10.jpg";
import Gallery11 from "../assets/sri-11.webp";
import Gallery12 from "../assets/sri-12.webp";

const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery12,
];


const Gallery = () => {
  return (
    <>
    <motion.section className="gallery"
    initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}  >
      <motion.div className="gallery-banner"
      initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }} >
        <img src ={Gallerybanner} alt="gallery"/>
        <h1>Our services in the industry</h1>
      </motion.div>
    </motion.section>
     <section className="gallery-grid">
      {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
      ))}
      </section>
    </>
  );
};

export default Gallery;