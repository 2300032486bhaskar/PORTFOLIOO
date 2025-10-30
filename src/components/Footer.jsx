import React, { useEffect } from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector('.footer');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          footer.classList.add('visible');
          observer.unobserve(footer);
        }
      });
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/2300032486bhaskar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/venkata-ramakrishna-bhaskar-kandukuri-041701279/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://x.com/bhaskar_0987?s=21" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
      <p>© {new Date().getFullYear()} Venkat Bhaskar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
