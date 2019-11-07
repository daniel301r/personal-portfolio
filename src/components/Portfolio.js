import React, { Component } from 'react';
import Project from './Project';

class Portfolio extends Component {
    
    state = {
        projects: [{
            name: 'Find A Pet',
            img: '../../public/img/adoptapet.png', 
            description: 'Are you looking for the perfect pet? Search for the species that you want and then you can filter through various options such as breed, age, color, size etc. When you see a pet that you like, take a closer look at its health stats, adoption status, who to contact etc.',
            tech: ["React", "Redux", "Javascript", "CSS"],
            frontEndLink: 'https://github.com/daniel301r/pet-adoption-trial',
            liveLink: 'https://adopt-a-pet-easily.herokuapp.com/',
        },{
            name: 'Ready Steady Recipe',
            img: '../../public/img/recipes.png',
            description: 'Do you ever have left over ingredients and wonder about what to cook? Enter up to five different ingredients and the app will give you recipe suggestions. You can sign up and then add and edit your own recipes.',
            tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
            frontEndLink: 'https://github.com/daniel301r/recipe-organiser',
            backEndLink: 'https://github.com/daniel301r/recipe-organiser-server',
            liveLink: 'https://recipe-organiser.herokuapp.com/'
        },{
            name: 'Quiz Creator',
            img: '../../public/img/quiz.png',
            description: 'Does what it says on the tin. Choose up to 20 questions with a range of categories and difficulties. Or you can leave the options blank and the app will choose for you.',
            tech: ["Vanilla JS", "ES6", "Webpack", "NPM", "CSS Animation"],
            frontEndLink: 'https://github.com/daniel301r/multiple-quiz',
            liveLink: 'https://multiple-quiz.herokuapp.com/'
        },{
            name: 'This Website',
            img: '',
            description: 'Behind the scenes of this website',
            tech: []
        }]
    }
    
    render() {
        return (
            <div id="portfolio" className="content-container">
                <div className="about">
                    <h2>Web Developer Portfolio</h2>
                    <p>A selection of my recent projects using various technologies. From Vanilla JS to React
                        with Redux, Express, Node.js and both MySQL and MongoDB. Click on the project for a closer look.
                    </p>
                </div>
                <div id="portfolio-gallery">
                    <ul>
                        {this.state.projects.map((project, i) => {
                            return (
                                <Project key={i} project={project}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Portfolio;