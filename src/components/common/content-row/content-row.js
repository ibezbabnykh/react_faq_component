import React from 'react';

import './content-row.scss';

const ContentRow = ({ leftColumn, rightColumn }) => {
    return (
        <div className="contentHolder">
            <aside className="LeftHandNav">
                {leftColumn}
            </aside>
            <div className="pageBody-content">
                {rightColumn}
            </div>
        </div>
    );
}

export default ContentRow;