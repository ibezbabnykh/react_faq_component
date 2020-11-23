import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import './welcome-back.scss';

import MyAccountMenu from '../my-account-menu';

const WelcomeBack = ({ name, onLogout }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="welcome-back">
            <button 
                type="button" 
                className={`my-account-button ${isVisible ? 'active' : ''}`} 
                onClick={toggleVisible}
            >
                <i className="fas fa-user"></i>
                <span className="hidden-xs">My account</span>
                <i className="fas fa-chevron-down"></i>
            </button>
            {isVisible &&
                <OutsideClickHandler
                    onOutsideClick={toggleVisible}
                >
                    <MyAccountMenu
                        name={name}
                        onLogout={onLogout}
                    />
                </OutsideClickHandler>
            }
        </div>
    );
}

export default WelcomeBack;