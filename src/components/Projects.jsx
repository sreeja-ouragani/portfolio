import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";

// Import images from assets
import aiInterview from "../assets/ai-interview.jpg";
import kiddoklass from "../assets/kiddoklass.jpg";
import medicine from "../assets/medicine.jpg";
import faq from "../assets/faq.jpg";
import convertease from "../assets/convertease.jpg";
import numberPlate from "../assets/number-plate.jpg";

// Project data with imported images
const projects = [
  {
    title: "AI Interview Preparation",
    description: "An AI-powered platform that generates interview questions, analyzes responses, and provides feedback.",
    link: "https://github.com/sreeja-ouragani/ai-interview-platform",
    bgImage: aiInterview,
  },
  {
    title: "Kiddoklass",
    description: "A full-stack ed-tech platform for online learning.",
    link: "https://kid-vercel.vercel.app/",
    bgImage: kiddoklass,
  },
  {
    title: "Medicine Recommendation System",
    description: "An AI model that suggests medicines based on symptoms.",
    link: "https://github.com/sreeja-ouragani/medicine_recommendation_system",
    bgImage: medicine,
  },
  {
    title: "AI FAQ Generation System",
    description: "An AI-powered FAQ generator for businesses using NLP and ML.",
    link: "https://github.com/sreeja-ouragani/FAQ-system",
    bgImage: faq,
  },
  {
    title: "ConvertEase",
    description: "A web app for converting files (images, videos, docs) efficiently.",
    link: "https://github.com/sreeja-ouragani/Convert-Ease",
    bgImage: convertease,
  },
  {
    title: "Number Plate Recognition",
    description: "Automatic vehicle number plate recognition system.",
    link: "https://github.com/sreeja-ouragani/number-plate",
    bgImage: numberPlate,
  },
];

const Projects = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Function to restart animation
  const restartAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  // Detect URL hash change or user click on header navigation
  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.hash === "#projects") {
        restartAnimation();
      }
    };

    window.addEventListener("hashchange", handleNavigation);
    return () => window.removeEventListener("hashchange", handleNavigation);
  }, []);

  return (
    <section className="projects section" id="projects" onClick={restartAnimation}>
      <div className="container">
        {/* Animated Title */}
        <motion.h2
          key={`title-${animationKey}`} // Unique key to restart animation
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={`card-${animationKey}-${index}`} // Unique key to restart animation
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
