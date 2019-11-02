import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import FrontPage from './components/FrontPage';
import Portfolio from './components/Portfolio';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={FrontPage}/>
          <Route path='/portfolio' component={Portfolio}/>
        </Switch>    
      </BrowserRouter>

    </div>
  );
}

export default App;


