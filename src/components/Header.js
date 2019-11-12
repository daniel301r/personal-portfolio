import React from 'react';

const Header = () => {
    

    // this could be a component with state so that it updates and displays depending on which page

    // figure out what page it is on

    // only show small menu if on project page
    return (
        <div id="header">
                <div className="back-list"><i className="fas fa-ellipsis-h"></i></div>
                <div className="prev"><i className="fas fa-chevron-left"></i></div>
                <div className="hamburger"><i className="fas fa-bars"></i></div>
                <div className="next"><i className="fas fa-chevron-right"></i></div>
        </div>
    );
};

export default Header;