import React from 'react';

import './dummy-block.scss';

const DummyBlock = ({ content }) => {
    return (
        <div className="dummy-block">{content}</div>
    );
};

export default DummyBlock;