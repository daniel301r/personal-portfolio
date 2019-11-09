import React from 'react';

/* could try and get multiple images to show different parts of the app */

const Project = ({ projects, match }) => {
    
    const id = match.params.project;
    const index = projects.findIndex(project => project.id === id);
    const project = projects[index];

    return (
        <div id="project" className="content-container text-pages">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div>
                <ul>
                    {project.frontEndLink && <li>Front End Code: {project.frontEndLink}</li>}
                    {project.backEndLink && <li>Back End Code: {project.backEndLink}</li>}
                    {project.liveLink && <li>Live Demo: {project.liveLink}</li>}
                </ul>
            </div>
            <img/>
            <p>About Section</p>
            <div>
                <h5>Technologies Used</h5>
                <ul>
                    {project.tech.map((el, i) => <li key={i}>{el}</li>)} 
                </ul>
            </div>
        </div>
    );
};

export default Project;