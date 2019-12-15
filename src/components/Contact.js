import React from 'react';

const Contact = () => {
    
    return (
        <div className="two-sided contact-small">
            <div className="one-side dark-side contact-small-half">
                <div className="one-side-container online-container">
                    <h1>Online</h1>
                    <h3><a href="https://github.com/daniel301r" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
                    <h3><a href="https://www.linkedin.com/in/daniel-munns/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3>
                </div>
            </div>
            <div className="one-side contact contact-small-half">
                <div className="one-side-container contact-container">
                    <h1>Contact</h1>
                    <h3>Get in touch:</h3>
                    <p>daniel@danielmunns.net</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;