import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Modal from './components/Modal';
import Container from './components/Container';
import SplashScreen from './components/SplashScreen';

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
        about: "Uses a third party API which provides information about pets that are available for adoption. Users can select a species and then options are provided for a filtered search. When users add filters the app creates a new query string based on users' preferences. The query is sent to the API and then new results are displayed based on the search parameters. Users can click on the image of the animal they want and the app creates a new query for individual animals. The app then displays more detailed information about the animal based on the query.",
        tech: ["React", "Redux", "Javascript ES6+", "CSS"],
        frontEndLink: 'https://github.com/daniel301r/pet-adoption-trial',
        liveLink: 'https://adopt-a-pet-easily.herokuapp.com/',
    },{
        id: 'ready-steady-recipe',
        name: 'Ready Steady Recipe',
        img: recipesImg,
        description: 'Do you ever have left over ingredients and wonder about what to cook? Enter up to five different ingredients and the app will give you recipe suggestions. You can sign up and then add and edit your own recipes.',
        tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
        about: 'Uses a third party API to suggest recipes based on user input of up to five ingredients. The app then displays the recipes that match the user input and users can select a recipe which displays further information from the API about the recipe and a link to where it can be found online. Users can sign up and create an account which gives them the ability to enter their own ingredients to create and edit their own recipes. Using Mongoose the app connects to a MongoDB database and saves users data and changes.',
        frontEndLink: 'https://github.com/daniel301r/recipe-organiser',
        backEndLink: 'https://github.com/daniel301r/recipe-organiser-server',
        liveLink: 'https://recipe-organiser.herokuapp.com/'
    },{
        id: 'quiz-creator',
        name: 'Quiz Creator',
        img: quizImg,
        description: 'Does what it says on the tin. Choose up to 20 questions with a range of categories and difficulties. Or you can leave the options blank and the app will choose for you.',
        tech: ["Vanilla JS", "ES6", "Webpack", "CSS Animation"],
        about: 'This apps allows users to input a range of options from number of questions to topic and difficulty. Then based on user input it creates a query string which connects to a third party API and returns a quiz based on the user input. If options are left blank, the app will randomly create a query string that selects the options for you. The app tracks whether a correct answer is given and then keeps score of the total amount of correct answers. When the quiz is finished the user is presented with the results of their quiz.',
        frontEndLink: 'https://github.com/daniel301r/multiple-quiz',
        liveLink: 'https://multiple-quiz.herokuapp.com/'
    },{
        id: 'portfolio',
        name: 'This Website',
        img: portImg,
        description: 'Behind the scenes of this website',
        about: 'A single page portfolio site that allows users to view contact details, about section, portfolio and individual projects in more detail. CSS transitions and animations create smooth changes between components which are controlled using React Router.',
        tech: ['React', 'React Router', 'CSS Animations'],
        frontEndLink: 'https://github.com/daniel301r/personal-portfolio'
    }],
    modalShow: false,
    showLoadingPage: true
  }
  
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ showLoadingPage: false })
    },3500)
  }

  toggleModal = () => {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <SplashScreen show={this.state.showLoadingPage}/>
          <Header toggle={this.toggleModal} />
          <Modal show={this.state.modalShow} toggle={this.toggleModal} />
          <Container projects={this.state.projects} showLoading={this.state.showLoadingPage}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
