import React from 'react';

const About = () => {
    // try and have it so you click and then it appears but for now don't worry
    // half and half the design to make it two different colors
    return (
        <div id="about">
            <div className="about-me">
                <div className="about-me-container">
                    <h1>About Me</h1>
                    <p>Hi, I'm Daniel from London</p>
                    <p>I'm a full-stack developer that likes working with Javascript and React.</p>
                    <p>This is my personal portfolio showing some of my most recent projects</p>
                    <p>Check out my portfolio and GitHub for more of my work.</p>
                    <p>Thanks for taking a look at my page.</p>
                </div>
            </div>
            <div className="skills">
                <div className="skills-container">
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