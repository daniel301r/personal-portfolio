import React from 'react';

const About = () => {
    // try and have it so you click and then it appears but for now don't worry
    // half and half the design to make it two different colors
    return (
        <div id="about">
            <div className="about-me">
                <h2>About Me</h2>
                <p>Hi, I'm Daniel from London</p>
                <p>I'm a full-stack developer that likes working with Javascript and React.</p>
                <p>This is my personal portfolio showing some of my most recent projects</p>
                <p>Check out my portfolio and GitHub for more of my work.</p>
                <p>Thanks for taking a look at my page.</p>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <div>
                    <h5>Languages</h5>
                    <p>Javascript ES6+, CSS, HTML, Python</p>
                    <h5>Libraries/Framerworks</h5>
                    <p>React, Redux, Express, Node.js</p>
                    <h5>Databases</h5>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
    );
};

export default About;