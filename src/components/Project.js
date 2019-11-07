import React from 'react';

const Project = ({ project }) => {

    return (
        <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div>
                <ul>
                    {project.frontEndLink && <li>{project.frontEndLink}</li>}
                    {project.backEndLink && <li>{project.backEndLink}</li>}
                    {project.liveLink && <li>{project.liveLink}</li>}
                </ul>
            </div>
            {/* could try and get multiple images to show different parts of the app */}
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