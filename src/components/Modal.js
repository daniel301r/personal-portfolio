import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ show, toggle }) => {
    const showClassName = show ? 'modal is-open' : 'modal'
    return (
        <div className={showClassName} >
            <div className="cls-btn" onClick={toggle}>X</div>
            <ul className="modal-main">
                <li><Link to='/' onClick={toggle}>Home</Link></li>
                <li><Link to='/about' onClick={toggle}>About</Link></li>
                <li><Link to='/portfolio' onClick={toggle}>Portfolio</Link></li>
                <li><Link to='/contact' onClick={toggle}>Contact</Link></li>
            </ul>
        </div>
    );
};

export default Modal;