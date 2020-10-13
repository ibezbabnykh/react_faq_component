import React from 'react';

import './nav-list.scss';

const NavList = () => {
    return (
        <ul className="nav-list">
            <li><a href="">
                <i className="fas fa-user"></i>
                Users
            </a></li>
            <li><a href="">
                <i className="fas fa-question"></i>
                FAQ
            </a></li>
        </ul>
    );
}

export default NavList;