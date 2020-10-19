import React from 'react';

import './load-more-button.scss';

const LoadMoreButton = ({handleShowMoreItems}) => {
    return (
        <div className="load-more-button">
            <button type="button" className="btn" onClick={handleShowMoreItems}>
                Load more
                <i className="fas fa-chevron-down"></i>
            </button>
        </div>
    );
};

export default LoadMoreButton;