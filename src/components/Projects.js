import React from 'react';

const Projects = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: '#'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: '#'
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: '#'
        }
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;