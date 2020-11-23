import React from 'react';

import './details-list.scss';

const DetailsList = ({ children }) => {
    return (
        <div className="details-list">
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child);
                })
            }
        </div>
    );
}

export default DetailsList;