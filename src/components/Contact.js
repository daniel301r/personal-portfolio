import React from 'react';

const Contact = () => {
    
    return (
        <div className="two-sided">
            <div className="dark-side one-side">
                <div className="online-container one-side-container">
                    <h1>Online</h1>
                    <h3><a href="https://github.com/daniel301r" target="_blank">Github</a></h3>
                    <h3><a href="https://www.linkedin.com/in/daniel-munns/" target="_blank">LinkedIn</a></h3>
                </div>
            </div>
            <div className="contact one-side">
                <div className="contact-container one-side-container">
                    <h1>Contact</h1>
                    <h3>Get in touch:</h3>
                    <p>daniel.munns248@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;