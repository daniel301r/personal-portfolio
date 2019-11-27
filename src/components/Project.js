import React from 'react';

const Project = ({ projects, match }) => {
    
    const id = match.params.project;
    const index = projects.findIndex(project => project.id === id);
    const project = projects[index];

    return (
        <div id="project" className="content-container text-pages">
            <div className="project-about">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
            <img src={project.img}/>
            <div className="section">
                <h4>Links</h4>
                <ul>
                    {project.frontEndLink && 
                        <li>Front End Code: 
                            <a href={project.frontEndLink} target="_blank"> {project.frontEndLink}</a>
                        </li>}
                    {project.backEndLink && 
                        <li>Back End Code: 
                            <a href={project.backEndLink} target="_blank"> {project.backEndLink}</a>
                        </li>}
                    {project.liveLink && 
                        <li>Live Demo: 
                            <a href={project.liveLink} target="_blank"> {project.liveLink}</a>
                        </li>}
                </ul>
            </div>
            <div className="section">
                <h4>About</h4>
                <p>{project.about}</p>
            </div>
            <div className="section">
                <h4>Technologies Used</h4>
                <ul className="tech-used">
                    {project.tech.map((el, i) => <li key={i}>{el}</li>)} 
                </ul>
            </div>
        </div>
    );
};

export default Project;