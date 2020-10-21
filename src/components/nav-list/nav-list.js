import React from 'react';
import { Link } from 'react-router-dom';

import './nav-list.scss';

const NavList = () => {
    return (
        <ul className="nav-list">
            <li>
                <Link to="/users/">
                    <i className="fas fa-user"></i>
                    Users
                </Link>
            </li>
            <li>
                <Link to="/faq">
                    <i className="fas fa-question"></i>
                    FAQ
                </Link>
            </li>
            <li>
                <Link to="/products">
                    <i className="fas fa-shopping-basket"></i>
                    Products
                </Link>
            </li>
        </ul>
    );
}

export default NavList;