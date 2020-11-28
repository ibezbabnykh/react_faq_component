import React from 'react';

import './my-account-menu.scss';

const MyAccountMenu = ({ name, onLogout }) => {
    return (
        <div className="my-account-menu">
            <div className="block-header">
                <h5 className="user-name">Welcome {name}</h5>
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