import React, { useEffect } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  useEffect(() => {
    const hero = document.querySelector('.hero');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hero.classList.add('visible');
          observer.unobserve(hero);
        }
      });
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img
          src="/profile.jpg"
          alt="Venkata Ramakrishna Bhaskar"
          className="hero-photo"
        />
        <h1>
          Hi, I'm <span className="highlight">NIKHIL REDDY BHEEMIREDDY</span>
        </h1>
        <p>A passionate Web Developer building modern and responsive websites.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary">Download Resume</a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/NikhilReddy3011" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/nikhil-reddy-25b967372" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
