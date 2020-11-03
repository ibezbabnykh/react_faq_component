import React from 'react';

import './my-account-menu.scss';

const MyAccountMenu = ({ name, onLogout }) => {
    return (
        <div className="my-account-menu">
            <div className="block-header">
                <strong className="user-name">Welcome {name}</strong>
                <span
                    className="btn-link"
                    onClick={onLogout}
                >
                    Logout
                </span>
            </div>
        </div>
    );
}

export default MyAccountMenu;