import React from 'react';

import './tab-content.scss';

import AccordionList from '../accordion-list';

const TabContent = ({ questionData, activeTab }) => {
    return (
        <div className="tab-content">
            { questionData.map(({id, entries}) => (
                <AccordionList key={id} elements={entries} isVisible={activeTab === id}/>
            )) }
        </div>
    );
};

export default TabContent;