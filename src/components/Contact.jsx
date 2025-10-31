import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const contactSection = document.querySelector('.contact-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          contactSection.classList.add('visible');
          observer.unobserve(contactSection);
        }
      });
    });

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>You can reach me at:</p>
        <div className="contact-info">
          <p>
            <strong>Mobile:</strong> <a href="tel:+918919956622">+91 8919956622</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:nikhilbheemireddy@gmail.com">nikhilbheemireddy@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
