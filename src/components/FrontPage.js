import React from 'react';
import { Link } from 'react-router-dom'

const FrontPage = () => {
    return (
        <div id="front-page" className="content-container">
            <span className="tags top-tags">{"<body>"}</span>
            <div className="text-area">
                <h1>Hi,<br/>I'm <span>D</span>an,<br/>web developer.</h1>
                <h4>Full-Stack Developer / React / Javascript</h4>
                <Link to="/portfolio">Portfolio</Link>
            </div>
            <span className="tags bottom-tags">
                {"</body>"} 
                <br/>
                <span>{"</html>"}</span>
            </span>
        </div>
    );
};

export default FrontPage;