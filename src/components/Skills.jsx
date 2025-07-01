import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 90, icon: "🎨" },
        { name: "Responsive Design", level: 90, icon: "📱" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "⚡" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "JWT", level: 85, icon: "🔐" },
        { name: "Socket.io", level: 75, icon: "🔌" }
      ]
    },
    {
      title: "AI & Integration",
      skills: [
        { name: "OpenAI API", level: 85, icon: "🤖" },
        { name: "Chatbot Development", level: 90, icon: "💬" },
        { name: "API Integration", level: 90, icon: "🔧" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Jira", level: 80, icon: "📊" },
        { name: "NPM", level: 85, icon: "📦" },
        { name: "Postman", level: 85, icon: "📮" }
      ]
    }
  ];

  const techStack = [
    "MERN Stack", "React", "Node.js", "Express", "MongoDB", 
    "TypeScript", "OpenAI", "Git", "Jira", "REST APIs"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.transform = 'scaleX(1)';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCategories = skillsRef.current?.querySelectorAll('.skill-category');
    skillCategories?.forEach((category) => observer.observe(category));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Skills & Expertise</h2>
          <p className="section-description">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <div className="tech-tags">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-tag-large">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          '--skill-width': `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <h4>Full Stack Development</h4>
            <p>End-to-end web application development with modern technologies</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🤖</div>
            <h4>AI Integration</h4>
            <p>Implementing AI solutions and chatbot systems for enhanced user experiences</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📱</div>
            <h4>Responsive Design</h4>
            <p>Creating beautiful and functional interfaces across all devices</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">⚡</div>
            <h4>Performance Optimization</h4>
            <p>Building fast, efficient, and scalable web applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
