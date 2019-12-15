import React from 'react';
import { Link } from 'react-router-dom'

import dLogo from '../img/letter-d.png'

const FrontPage = () => {
    return (
        <div className="content-container">
            <span className="tags top-tags">{"<body>"}</span>
            <div className="front-links-container">
                <div className="front-link"><a href="https://github.com/daniel301r" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></div>
                <div className="front-link"><a href="https://www.linkedin.com/in/daniel-munns/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></div>
            </div>
            <div className="text-area">
                <h1><span>H</span><span>i</span><span>,</span>
                    <br/><span>I</span><span>'</span><span>m&nbsp;</span>
                    <span className="colored-letter">D</span>
                    <span>a</span><span>n</span><span>,</span>
                    <br/><span>w</span><span>e</span><span>b&nbsp;</span>
                    <span>d</span><span>e</span><span>v</span>
                    <span>e</span><span>l</span><span>o</span>
                    <span>p</span><span>e</span><span>r</span>
                    <span>.</span>
                    </h1>
                <h4>Full-Stack Developer / React / Javascript</h4>
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <span className="tags bottom-tags">
                {"</body>"} 
                <br/>
                <span>{"</html>"}</span>
            </span>
            <img className="d-logo" src={dLogo}/>
        </div>
    );
};

export default FrontPage;