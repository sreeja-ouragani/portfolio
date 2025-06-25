import React, { useState, useEffect, useRef } from "react";
import "../styles/about.css";
import myPhoto from "../assets/my-photo.png"; // Replace with actual image path

const About = () => {
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const aboutRef = useRef(null);
  const intervalRef = useRef(null);

  const aboutText =
    "I'm Sreeja, a Full-Stack Developer specializing in React, Next.js, Node.js, and AI/ML integration. I have experience in building scalable web applications and cloud-based solutions. With a strong foundation in AWS, I focus on crafting optimized backend systems while delivering seamless user experiences.";

  const extraText =
    "Beyond coding, I enjoy dancing and exploring new technologies. I'm a continuous learner who loves challenging myself with innovative projects that push the boundaries of AI and web development.";

  const additionalDetails = (
    <div className="additional-info">
      <h3>Languages:</h3>
      <p>Telugu, Hindi, English</p>

      <h3>Education:</h3>
      <p>
        B.Tech in Computer Science and Engineering (AI & ML), Malla Reddy University — CGPA: 8.92 (Till 5th Sem)
      </p>

      <h3>Interests:</h3>
      <p>AI & ML, Full-Stack Development, AWS Cloud, Competitive Programming</p>

      <h3>Highlights:</h3>
      <ul>
        <li>📌 Full Stack Intern @ Unified Mentor (Dec 2024 – Jan 2025)</li>
        <li>🏆 Participated in 5+ National Hackathons (AI, EdTech, Cybersecurity)</li>
        <li>🚀 Selected for E-Summit 2025 via TiE Hyderabad & Startup India</li>
        <li>🎨 Poster Designing Runner-up | 🕺 Dance Winner</li>
        <li>👩‍💼 Served as Class Representative</li>
      </ul>

      <h3>Tools & Platforms:</h3>
      <p>Git, GitHub, Vercel, Postman, Figma, MongoDB Atlas, Google Colab</p>
    </div>
  );

  useEffect(() => {
    const handleScrollToAbout = () => {
      if (window.location.hash === "#about") {
        triggerAnimation();
      } else {
        setExpanded(false); // ✅ Auto-close when navigating away
      }
    };

    window.addEventListener("hashchange", handleScrollToAbout);
    return () => window.removeEventListener("hashchange", handleScrollToAbout);
  }, []);

  const triggerAnimation = () => {
    setText("");
    setShowImage(false);
    let index = 0;

    clearInterval(intervalRef.current);

    setTimeout(() => {
      setShowImage(true);
      intervalRef.current = setInterval(() => {
        if (index < aboutText.length) {
          setText((prevText) => prevText + aboutText.charAt(index));
          index++;
        } else {
          clearInterval(intervalRef.current);
        }
      }, 30);
    }, 500);
  };

  return (
    <section className="about section" id="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        {/* ✅ Profile Picture */}
        <div className={`about-image ${showImage ? "fade-in" : ""}`}>
          <img src={myPhoto} alt="My Profile" loading="lazy" />
        </div>

        {/* ✅ About Card */}
        <div className="about-card">
          <p className="typewriter">{text}</p>
          {expanded && (
            <>
              <p className="extra-text">{extraText}</p>
              {additionalDetails}
            </>
          )}
        </div>

        {/* ✅ "Know More" Button */}
        <button
          className="know-more-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Know More?"}
        </button>
      </div>
    </section>
  );
};

export default About;
