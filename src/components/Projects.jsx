import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Student Management System',
    description:
      'A full-stack web application built using React, Node.js, and MongoDB to manage student records, attendance, and grades. It includes secure authentication, dynamic dashboards, and CRUD operations for admins and students.',
    imageUrl: '/student-management.png', // make sure the image is in the public folder
    liveUrl: 'https://frontend-two-gamma-hk616hmuv7.vercel.app/',
    repoUrl: 'https://github.com/2300032486bhaskar/studentManagement/tree/main',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a description of project two.',
    imageUrl: '/project2.png',
    liveUrl: '#',
    repoUrl: '#',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(({ id, title, description, imageUrl, liveUrl, repoUrl }) => (
            <div key={id} className="project-card">
              <img src={imageUrl} alt={title} className="project-image" />
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-links">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
