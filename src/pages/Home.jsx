import React from "react";
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
import banner from "../assets/image1.webp";
import banner1 from "../assets/image2.webp";

import {
  FaCheck,
  FaCheckCircle,
} from "react-icons/fa";

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

  return (
    <>
      <section className="banner-section">
        <img
          src={bannerImg}
          alt="Srinidhi Comfort Solution Banner"
          className="banner-image"
        />
      </section>
      {/* ================= About Section ================= */}

      <section className="about-section">
        {/* Category Cards */}

        <div className="category-row">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        {/* About */}

        <div className="about-container">
          <div className="about-image">
            <img
              src={aboutImg}
              alt="About Srinidhi Comfort Solution"
            />
          </div>

          <div className="about-content">
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
        <img src={banner} alt="Banner" className="hero-image" />
      </section>

      {/* ================= Innovation Section ================= */}

      <section className="innovation-section">
        <div className="innovation-container">

          {/* Left */}

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

          {/* Right */}

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
        <img src={banner1} alt="Banner" className="hero-image1" />
      </section>

      {/* ================= Experience Section ================= */}

      <section className="experience">

        {/* Left Content */}

        <div className="experience-left">

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

        {/* Center Image */}

        <div className="experience-center">
          <img src={experienceImg} alt="Experience" />
        </div>

        {/* Right Cards */}

        <div className="experience-right">

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