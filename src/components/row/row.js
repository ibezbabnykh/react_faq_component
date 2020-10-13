import React from 'react';

import './row.scss';

const Row = ({ leftColumn, rightColumn }) => {
    return (
        <div className="contentHolder">
            <div className="LeftHandNav">
                {leftColumn}
            </div>
            <div className="pageBody-content">
                {rightColumn}
            </div>
        </div>
    );
}

export default Row;