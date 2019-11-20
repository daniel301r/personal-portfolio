import React from 'react';

import { Link } from 'react-router-dom';

const Portfolio = ({ projects }) => {
    return (
        <div id="portfolio" className="content-container text-pages">
            <div className="about">
                <h1>Web Developer Portfolio</h1>
                <p>A selection of my recent projects using various technologies. From Vanilla JS to React
                    with Redux, Express, Node.js and both MySQL and MongoDB. Click on the project for a closer look.
                </p>
            </div>
            <div id="portfolio-gallery">
                <ul>
                    {projects.map((project, i) => {
                    return(
                        <li key={i}>
                            <Link to={"/portfolio/" + project.id}>
                                <img src={project.img} alt="Not available"/>
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    );
}

export default Portfolio;