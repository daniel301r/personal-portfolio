import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={FrontPage}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/portfolio/:project' component={Project}/>
          <Route path='/about' component={About}/>
        </Switch>    
      </BrowserRouter>
    </div>
  );
}

export default App;
