import React from 'react';

import './header.scss';
import logo from './DLL-logo.svg';

import Navlist from '../nav-list';

const Header = () => {
    return (
        <div className="header">
            <div className="center-holder">
                <img src={logo} alt="logo" className="logo" />
                <Navlist />
            </div>
        </div>
    );
}

export default Header;