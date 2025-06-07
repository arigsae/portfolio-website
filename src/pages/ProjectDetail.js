import React from 'react';

const ProjectDetail = () => {
    return (
        <div className="project-detail">
            <h1>Project Title</h1>
            <p>Description of the project goes here. This section can include details about the project's purpose, technologies used, and any other relevant information.</p>
            <h2>Features</h2>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <h2>Technologies Used</h2>
            <p>List of technologies used in the project.</p>
            <h2>Links</h2>
            <p>
                <a href="https://github.com/yourusername/project-repo" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </p>
        </div>
    );
};

export default ProjectDetail;