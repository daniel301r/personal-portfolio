import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import FrontPage from './FrontPage';
import Portfolio from './Portfolio';
import Project from './Project';
import About from './About';
import Contact from './Contact';

const Container = ({ location, projects }) => {
    return (
        <TransitionGroup className="container">
            <CSSTransition
            key={location.key}
            timeout={{ enter: 400, exit: 400 }}
            classNames={'fade'}
            >
                <Switch location={location}>
                    <Route exact path='/' component={FrontPage}/>
                    <Route exact path='/portfolio' render={(props) => <Portfolio {...props} projects={projects} />}/>
                    <Route path='/portfolio/:project' render={(props) => <Project {...props} projects={projects} />}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>  
            </CSSTransition>
        </TransitionGroup>
    );
};

export default withRouter(Container);