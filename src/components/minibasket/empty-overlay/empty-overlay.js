import React from 'react';

import avatar from './avatar.png';
import './empty-overlay.scss';

const EmptyOverlay = () => {
    return (
        <div className="minibasket-empty-overlay">
            <div className="empty-basket-content">
                <div className="person-avatar">
                    <img src={avatar} alt="avatar" />
                </div>
                <h4>Your basket is empty</h4>
            </div>
        </div>
    );
}

export default EmptyOverlay;