import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-list.scss';

const NavList = () => {
    const navItems = [{
        href: "/customers/",
        icon: "fa-user",
        label: "Customers"
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
            <NavLink to={href} activeClassName="active">
                <i className={`fas ${icon}`}></i>
                {label}
            </NavLink>
        </li>
    ));

    return (
        <ul className="nav-list">
            {navElements}
        </ul>
    );
}

export default NavList;