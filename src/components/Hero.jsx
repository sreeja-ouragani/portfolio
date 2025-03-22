// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleHomeClick = () => {
      setKey((prevKey) => prevKey + 1); // Change key to trigger animation
    };

    const homeBtn = document.querySelector('a[href="#home"]');
    if (homeBtn) {
      homeBtn.addEventListener("click", handleHomeClick);
    }

    return () => {
      if (homeBtn) {
        homeBtn.removeEventListener("click", handleHomeClick);
      }
    };
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">

        {/* ✅ Animated Heading (Triggers on Home Click) */}
        <motion.h1
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Hi, I'm{" "}
          <motion.span
            className="highlight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            Sreeja Ouragani
          </motion.span>
        </motion.h1>

        {/* ✅ Animated Subtitle */}
        <motion.p
          key={key + 1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Full Stack Developer | AI&ML Enthusiast
        </motion.p>

        {/* ❌ Removed Animation from Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a 
            href="/sreeja-ouragani-resume.pdf"
            className="btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
