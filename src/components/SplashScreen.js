import React from 'react';

const SplashScreen = ({ show }) => {
    const showSplashScreen = show ? "loader-bg open" : "loader-bg";
    return (
        <div className={showSplashScreen}>
            <div className="loader"></div>
        </div>
    );
};

export default SplashScreen;