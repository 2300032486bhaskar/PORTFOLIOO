import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    // Fade-in effect on scroll
    const aboutSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add('visible');
          observer.unobserve(aboutSection);
        }
      });
    });

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>

        <p>
          I’m a passionate <strong>Web Developer</strong> who thrives on building
          stunning, high-performance websites and web apps.  
          My expertise lies in <strong>React</strong>, <strong>JavaScript</strong>, and
          modern front-end architecture — always with a focus on creating seamless
          and visually engaging user experiences.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🎯 Mission</h3>
            <p>
              To craft elegant, efficient, and user-focused digital experiences that make
              an impact — blending creativity with clean code.
            </p>
          </div>

          <div className="about-card">
            <h3>💡 Skills</h3>
            <p>
              React, JavaScript (ES6+), HTML, CSS, Tailwind, Git, and a strong eye for UI/UX design.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Goal</h3>
            <p>
              To grow as a developer by contributing to innovative projects and exploring
              emerging front-end technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
