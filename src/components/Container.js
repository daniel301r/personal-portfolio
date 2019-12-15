import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

import FrontPage from './FrontPage';
import Portfolio from './Portfolio';
import Project from './Project';
import About from './About';
import Contact from './Contact';

const Container = ({ projects, location }) => {
    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
            key={location.key}
            timeout={{ enter: 400, exit: 400 }}
            classNames={'fade'}
            >
                <section className="route-section">
                    <Switch location={location}>
                        <Route exact path='/' component={FrontPage}/>
                        <Route exact path='/portfolio' render={(props) => <Portfolio {...props} projects={projects} />}/>
                        <Route path='/portfolio/:project' render={(props) => <Project {...props} projects={projects} />}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch> 
                </section>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default withRouter(Container);