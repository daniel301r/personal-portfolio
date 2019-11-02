import React, { Component } from 'react';

class Portfolio extends Component {
    
    state = {
        projects: [{
            name: '',
            img: '',
            description: '',
            tech: '',
            gitlink: '',
            liveLink: ''
        }]
    }
    
    render() {
        return (
            <div id="portfolio">
                <h2>web developer portfolio</h2>
                <p>A selection of my recent projects using various technologies. From vanilla JS to React
                    with Redux, Node.js and both MySQL and MongoDB. Click on the project for a closer look.
                </p>
                <div id="portfolio-gallery">
                    <ul>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default Portfolio;