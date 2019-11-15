import React from 'react';

const Modal = ({ show, toggle }) => {
    const showClassName = show ? 'modal display-block' : 'modal display-none'
    return (
        <div className={showClassName} >
            <div className="cls-btn" onClick={toggle}>X</div>
            <div className="modal-main">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Modal;