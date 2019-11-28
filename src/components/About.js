import React from 'react';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="two-sided">
            <div className="one-side dark-side">
                <div className="one-side-container about-me-container">
                    <h1>About Me</h1>
                    <p>Hi, I'm Daniel from London</p>
                    <p>I'm a full-stack developer that likes working with Javascript and React</p>
                    <p>Feel free to take a look at my latest projects on the <Link to="/portfolio">web portfolio page</Link></p>
                    <p>You can also check out <a href="https://github.com/daniel301r" target="_blank">GitHub</a> for more of my work</p>
                    <p>Thanks for stopping by my page</p>
                </div>
            </div>
            <div className="one-side">
                <div className="one-side-container skills-container">
                    <h1>Skills</h1>
                    <div>
                        <h3>Languages</h3>
                        <p>Javascript ES6+, CSS, HTML, Python</p>
                        <h3>Libraries/Frameworks</h3>
                        <p>React, Redux, Express, Node.js</p>
                        <h3>Databases</h3>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;