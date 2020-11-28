import React from 'react';

import './key-messaging.scss';

const KeyMessaging = ({ type, message }) => {
    return (
        <div className={`key-messaging ${type}`}>
            <div className="content">{message}</div>
        </div>
    );
}

export default KeyMessaging;