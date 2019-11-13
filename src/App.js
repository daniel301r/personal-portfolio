import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import About from './components/About';

import petImg from './img/adoptapet.png';
import recipesImg from './img/recipes.png';
import quizImg from './img/quiz.png';
import portImg from './img/portfolio.png';

class App extends Component {

  state = {
    projects: [{
        id: 'find-a-pet',
        name: 'Find A Pet',
        img: petImg, 
        description: 'Are you looking for the perfect pet? Search for the species that you want and then you can filter through various options such as breed, age, color, size etc. When you see a pet that you like, take a closer look at its health stats, adoption status, who to contact etc.',
        tech: ["React", "Redux", "Javascript", "CSS"],
        frontEndLink: 'https://github.com/daniel301r/pet-adoption-trial',
        liveLink: 'https://adopt-a-pet-easily.herokuapp.com/',
    },{
        id: 'ready-steady-recipe',
        name: 'Ready Steady Recipe',
        img: recipesImg,
        description: 'Do you ever have left over ingredients and wonder about what to cook? Enter up to five different ingredients and the app will give you recipe suggestions. You can sign up and then add and edit your own recipes.',
        tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        frontEndLink: 'https://github.com/daniel301r/recipe-organiser',
        backEndLink: 'https://github.com/daniel301r/recipe-organiser-server',
        liveLink: 'https://recipe-organiser.herokuapp.com/'
    },{
        id: 'quiz-creator',
        name: 'Quiz Creator',
        img: quizImg,
        description: 'Does what it says on the tin. Choose up to 20 questions with a range of categories and difficulties. Or you can leave the options blank and the app will choose for you.',
        tech: ["Vanilla JS", "ES6", "Webpack", "NPM", "CSS Animation"],
        frontEndLink: 'https://github.com/daniel301r/multiple-quiz',
        liveLink: 'https://multiple-quiz.herokuapp.com/'
    },{
        id: 'portfolio',
        name: 'This Website',
        img: portImg,
        description: 'Behind the scenes of this website',
        tech: []
    }]
  }
  
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component={FrontPage}/>
            <Route exact path='/portfolio' render={(props) => <Portfolio {...props} projects={this.state.projects} />}/>
            <Route path='/portfolio/:project' render={(props) => <Project {...props} projects={this.state.projects} />}/>
            <Route path='/about' component={About}/>
          </Switch>    
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
