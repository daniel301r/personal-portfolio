import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    
    movePage = (page, direction) => {
        if(direction === 'prev'){
            switch(page){
                case '/portfolio':
                    this.props.history.push('/about')
                    break
                case '/about':
                    this.props.history.push('/')
                    break
                case '/portfolio/portfolio':
                    this.props.history.push('/portfolio/quiz-creator')
                    break
                case '/portfolio/ready-steady-recipe':
                    this.props.history.push('/portfolio/find-a-pet')
                        break
                case '/portfolio/quiz-creator':
                    this.props.history.push('/portfolio/ready-steady-recipe')
                        break
            }
        } else if (direction === 'portfolio'){
            this.props.history.push('/portfolio')
        } else {
            switch(page){
                case '/':
                    this.props.history.push('/about')
                    break
                case '/about':
                    this.props.history.push('/portfolio')
                    break
                case '/portfolio/find-a-pet':
                    this.props.history.push('/portfolio/ready-steady-recipe')
                        break
                case '/portfolio/ready-steady-recipe':
                    this.props.history.push('/portfolio/quiz-creator')
                        break
                case '/portfolio/quiz-creator':
                    this.props.history.push('/portfolio/portfolio')
                        break
            }
        }
    }



    render(){
        const curPage = this.props.location.pathname;
        if(curPage === '/'){
            return (
                <div id="header">
                    <div className="hamburger"><i className="fas fa-bars"></i></div>
                    <div className="next" onClick={() => this.movePage(curPage, 'next')}><i className="fas fa-chevron-right"></i></div>
                </div>
            )
        } else if (curPage === '/about' || curPage === '/portfolio') {
            return (
                <div id="header">
                        <div className="prev" onClick={() => this.movePage(curPage, 'prev')}><i className="fas fa-chevron-left"></i></div>
                        <div className="hamburger"><i className="fas fa-bars"></i></div>
                        <div className="next" onClick={() => this.movePage(curPage, 'next')}><i className="fas fa-chevron-right"></i></div>
                </div>
            ); 
        } else if (curPage === '/portfolio/find-a-pet'){
            return (
                <div id="header">
                        <div className="back-list" onClick={() => this.movePage(curPage, 'portfolio')}><i className="fas fa-ellipsis-h"></i></div>
                        <div className="hamburger"><i className="fas fa-bars"></i></div>
                        <div className="next" onClick={() => this.movePage(curPage, 'next')}><i className="fas fa-chevron-right"></i></div>
                </div>
            );
        } else if (curPage === '/portfolio/portfolio') {
            return (
                <div id="header">
                        <div className="back-list" onClick={() => this.movePage(curPage, 'portfolio')}><i className="fas fa-ellipsis-h"></i></div>
                        <div className="prev" onClick={() => this.movePage(curPage, 'prev')}><i className="fas fa-chevron-left"></i></div>
                        <div className="hamburger"><i className="fas fa-bars"></i></div>
                </div>
            );
        } else {
            return (
                <div id="header">
                        <div className="back-list" onClick={() => this.movePage(curPage, 'portfolio')}><i className="fas fa-ellipsis-h"></i></div>
                        <div className="prev" onClick={() => this.movePage(curPage, 'prev')}><i className="fas fa-chevron-left"></i></div>
                        <div className="hamburger"><i className="fas fa-bars"></i></div>
                        <div className="next" onClick={() => this.movePage(curPage, 'next')}><i className="fas fa-chevron-right"></i></div>
                </div>
            );
        }
    }
};

export default withRouter(Header);