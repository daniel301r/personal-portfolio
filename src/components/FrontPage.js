import React from 'react';
import { Link } from 'react-router-dom'

const FrontPage = () => {
    return (
        <div id="front-page">
            <div className="text-area">
                <h1>Hi,<br/>I'm Dan,<br/>web developer</h1>
                <h4>Full-Stack Developer / React / Javascript</h4>
                {/* <Link to="/portfolio">Portfolio</Link> */}
            </div>
        </div>
    );
};

export default FrontPage;