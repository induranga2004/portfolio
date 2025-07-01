import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "chatbot-ai-db",
      description: "Open-source package for AI-driven chatbot and database integration.",
      tech: ["Node.js", "TypeScript", "MongoDB", "OpenAI", "REST API"],
      link: "https://www.npmjs.com/package/chatbot-ai-db",
      github: "https://github.com/induranga2004/chatbot-ai-db",
      type: "NPM Package"
    },
    {
      id: 3,
      title: "FreshFare Grocery POS System",
      description: "MERN stack grocery store management system with real-time queue updates.",
      tech: ["MERN Stack", "Redux", "JWT", "Socket.io", "Chart.js"],
      link: "https://github.com/induranga2004/FreshFare",
      github: "https://github.com/induranga2004/FreshFare",
      type: "Full Stack"
    },
    {
      id: 4,
      title: "Kamal Iron Works Website",
      description: "Business website project using React and Node.js.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "CSS3"],
      link: "https://github.com/induranga2004/kamal-ironworks",
      github: "https://github.com/induranga2004/kamal-ironworks",
      type: "Web Application"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Featured Projects</h2>
          <p className="section-description">
            A showcase of my recent work in web development, AI integration, and open-source contributions.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card" 
              style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="project-header">
                <div className="project-type">{project.type}</div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      aria-label="View GitHub repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                      </svg>
                      <span className="link-tooltip">GitHub</span>
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                      aria-label="View live project"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                      <span className="link-tooltip">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-overlay">
                <div className="overlay-content">
                  <h4>View Project</h4>
                  <p>Click to explore this project</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/induranga2004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
