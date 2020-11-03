import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';
import logo from './DLL-logo.svg';

import Navlist from '../nav-list';
import HeaderMiniBasket from '../common/header-minibasket';
import WelcomeBack from '../welcome-back';
import { logout } from '../../actions';

const Header = ({ loggedIn, user, onLogout }) => {
    return (
        <div className="header">
            <div className="top-space-wrapper">
                <div className="center-holder">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="action-wrapper">
                        {!loggedIn
                            ? <Link to="/login" className="sign-in-link">
                                <i className="fas fa-user"></i>
                                <span className="hidden-xs">Sign in or Register</span>
                            </Link>
                            : <WelcomeBack name={user.firstName} onLogout={onLogout} />
                        }
                        <HeaderMiniBasket />
                    </div>
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

const mapStateToProps = ({ authentication: { user, loggedIn } }) => {
    return { user, loggedIn }
}

const mapDispatchToProps = {
    onLogout: logout()
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);