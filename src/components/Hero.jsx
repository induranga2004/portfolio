import React, { useState, useEffect } from 'react';
import heroImage from '../assets/images/hero.png';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = ['Full Stack Developer', 'AI Chatbot Author', 'Open Source Contributor'];
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Open Canva CV in a new tab
    window.open('https://www.canva.com/design/DAGr28IVJ7I/1QUx1Zost9vVogfg9mYN6Q/view?utm_content=DAGr28IVJ7I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h54c07975fc', '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting fade-in">
              <span className="wave">👋</span>
              <h1>Hi, I'm <span className="text-gradient">Induranga Gunasekara</span></h1>
            </div>
            
            <div className="hero-role slide-in-left">
              <h2>
                <span className="typing-text">{typedText}</span>
                <span className="cursor">|</span>
              </h2>
            </div>
            
            <p className="hero-description slide-in-left">
              Passionate about creating innovative solutions with modern technologies. 
              Specializing in full-stack development, AI integration, and open-source contributions.
            </p>
            
            <div className="hero-buttons slide-in-left">
              <button className="btn btn-primary" onClick={scrollToProjects}>
                🚀 View Projects
              </button>
              <button className="btn btn-outline" onClick={downloadCV}>
                📄 View CV
              </button>
            </div>
            
            <div className="hero-social slide-in-left">
              <a href="https://github.com/induranga2004" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/induranga-gunasekara" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:induranga.learning@gmail.com" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.724l9.615-6.903h.749c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </div>
            
            <div className="scroll-indicator-inline bounce">
              <div className="scroll-arrow">⬇</div>
            </div>
          </div>
          
          <div className="hero-image slide-in-right">
            <div className="image-container">
              <img src={heroImage} alt="Induranga Gunasekara" className="hero-img pulse" />
              <div className="image-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
