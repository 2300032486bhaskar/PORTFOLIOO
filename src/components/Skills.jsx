import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript',
  'React',
  'HTML5',
  'Python',
  'C',
  'Node.js',
  'Git',
  'REST APIs',
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
