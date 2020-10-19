import React from 'react';

import './tab-content.scss';

import Accordion from '../../accordion';

const TabContent = ({ questionData, activeTab }) => {
    return (
        <div className="tab-content">
            { questionData.map(({ id, entries }) => (
                <Accordion key={id} elements={entries} isVisible={activeTab === id} />
            ))}
        </div>
    );
};

export default TabContent;