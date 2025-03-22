import "../styles/skills.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaHtml5, FaCss3Alt, FaPhp, FaGitAlt, FaGithub, FaBrain } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiJavascript, SiExpress, SiFlask, SiPostman, SiOpencv, SiTensorflow, SiVite, SiAngular } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "AI/ML", icon: <FaBrain /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
];

const additionalSkills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Angular.js", icon: <SiAngular /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "NLP", icon: <FaBrain /> },
  { name: "Computer Vision", icon: <SiOpencv /> },
  { name: "Deep Learning", icon: <SiTensorflow /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
];

const Skills = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Function to restart animation
  const restartAnimation = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  // Detect URL hash change or user click on header navigation
  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.hash === "#skills") {
        restartAnimation();
      }
    };

    window.addEventListener("hashchange", handleNavigation);
    return () => window.removeEventListener("hashchange", handleNavigation);
  }, []);

  return (
    <section className="skills section" id="skills" onClick={restartAnimation}>
      <div className="container">
        {/* Animated Title */}
        <motion.h2
          key={`title-${animationKey}`}
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Skills
        </motion.h2>

        {/* Main Skills Grid */}
        <motion.div
          key={`grid-${animationKey}`}
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon} <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <h3 className="sub-title">Additional Skills</h3>
        <motion.div
          key={`additional-grid-${animationKey}`}
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon} <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
