import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import logo from './DLL-logo.svg';

import Navlist from '../nav-list';
import HeaderMiniBasket from '../common/header-minibasket';

const Header = () => {
    return (
        <div className="header">
            <div className="top-space-wrapper">
                <div className="center-holder">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                    <HeaderMiniBasket />
                </div>
            </div>
            <div className="sub-nav-container">
                <div className="center-holder">
                    <Navlist />
                </div>
            </div>
        </div>
    );
}

export default Header;