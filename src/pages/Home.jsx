import React, { useState, useEffect } from "react";
import "./Home.css";
import residential from "../assets/residential.webp";
import commercial from "../assets/commercial.webp";
import industrial from "../assets/industrial.webp";
import hospital from "../assets/hospital.webp";
import office from "../assets/office.webp";
import retail from "../assets/retail.webp";
import aboutImg from "../assets/about.webp";

import leftImg from "../assets/innovation1.webp";
import rightImg from "../assets/innovation2.webp";
import experienceImg from "../assets/experience.webp";

import bannerImg from "../assets/image.webp";
import banner from "../assets/banner.webp";
import banner1 from "../assets/banner1.webp";

import image from "../assets/image1.webp";
import image1 from "../assets/image2.webp";

import { FaCheck, FaCheckCircle, } from "react-icons/fa";

const sliderImages = [bannerImg, banner, banner1];
const Home = () => {
  const categories = [
    {
      image: residential,
      title: "Residential",
    },
    {
      image: commercial,
      title: "Commercial",
    },
    {
      image: industrial,
      title: "Industrial",
    },
    {
      image: hospital,
      title: "Hospitals",
    },
    {
      image: office,
      title: "Offices",
    },
    {
      image: retail,
      title: "Retail",
    },

  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="banner-section">
        <div className="slider-container">
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Banner ${index + 1}`}
              className={`banner-image ${currentSlide === index ? "active" : ""
                }`}
            />
          ))}
        </div>
      </section>


      <section className="about-section">
        <div className="category-row">
          {categories.map((item, index) => (
            <div
              className="category-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="about-container">
          <div className="about-image fade-left">
            <img
              src={aboutImg}
              alt="About Srinidhi Comfort Solution"
            />
          </div>
          <div className="about-content fade-right">
            <h1>
              Welcome to <br />
              <span>Srinidhi Comfort Solution</span>
            </h1>
            <p>
              Srinidhi Comfort Solution is a renowned name in the Air
              Conditioning (HVAC) sector for its quality services since
              2006. We specialize in AC Sales, Central Air Conditioning
              and AMC Services in Hyderabad. We are authorized dealers
              for leading Air Conditioning brands with global presence.
            </p>

            <button className="read-btn">
              Read More
            </button>
          </div>
        </div>
      </section>
      <section className="hero-banner">
        <img src={image} alt="Banner" className="hero-image" />
      </section>
      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-left">
            <p className="innovation-text">
              Through innovation and advanced technology, we create a
              brighter, safer future for our customers and communities
              worldwide.
            </p>
            <img
              src={leftImg}
              alt="Innovation"
              className="innovation-image"
            />
          </div>
          <div className="innovation-right">
            <img
              src={rightImg}
              alt="Innovation"
              className="innovation-image"
            />
            <p className="innovation-text">
              "Our commitment to innovation and technology drives us to
              deliver safer, smarter, and brighter futures worldwide."
            </p>
          </div>
        </div>
      </section>
      <section className="hero-banner1">
        <img src={image1} alt="Banner" className="hero-image1" />
      </section>
      <section className="experience">
        <div className="experience-left fade-left">
          <h1>
            Experience You <br />
            Can Rely On
          </h1>
          <p className="experience-desc">
            View fine me gone this name an rank. Compact greater and demands
            mrs the parlors. Park be fine easy any size beautiful world away.
          </p>
          <div className="experience-list">
            <div>
              <FaCheck />
              <span>Stay informed with up-to-date market data</span>
            </div>
            <div>
              <FaCheck />
              <span>I use proven strategies to secure the best</span>
            </div>
            <div>
              <FaCheck />
              <span>Whether you're buying your first property</span>
            </div>
          </div>
        </div>
        <div className="experience-center fade-up">
          <img src={experienceImg} alt="Experience" />
        </div>
        <div className="experience-right fade-right">
          <div className="service-card active">
            <FaCheckCircle className="icon" />
            <div>
              <h3>Market Analysis & Insights</h3>
              <p>Get personalized listings that match.</p>
            </div>
          </div>
          <div className="service-card">
            <FaCheckCircle className="icon" />
            <div>
              <h3>Home Staging & Preparation</h3>
              <p>Get personalized listings that match.</p>
            </div>
          </div>
          <div className="service-card">
            <FaCheckCircle className="icon" />
            <div>
              <h3>Marketing & Advertising</h3>
              <p>Get personalized listings that match.</p>
            </div>
          </div>
          <div className="service-card">
            <FaCheckCircle className="icon" />
            <div>
              <h3>Buyers Representation</h3>
              <p>Get personalized listings that match.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;