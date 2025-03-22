import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../styles/socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/sreeja-ouragani" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/ouragani-s-860a31308/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://www.instagram.com/andthats_sreejj/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  );
};

export default Socials;
