import React from 'react';
import { Link } from 'react-router-dom';

import './nav-list.scss';

const NavList = () => {
    const navItems = [{
        href: "/users/",
        icon: "fa-user",
        label: "Users"
    },
    {
        href: "/faq",
        icon: "fa-question",
        label: "FAQ"
    },
    {
        href: "/products",
        icon: "fa-shopping-basket",
        label: "Products"
    }];

    const navElements = navItems.map(({ href, icon, label }) => (
        <li key={label}>
            <Link to={href}>
                <i className={`fas ${icon}`}></i>
                {label}
            </Link>
        </li>
    ));

    return (
        <ul className="nav-list">
            {navElements}
        </ul>
    );
}

export default NavList;