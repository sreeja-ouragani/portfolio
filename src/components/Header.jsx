import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import "../styles/header.css";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex">
        <h1 className="logo">MyPortfolio</h1>

        <div className="spacer"></div>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* ✅ Dark Mode Toggle Button */}
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* ✅ Mobile Menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
