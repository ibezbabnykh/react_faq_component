import React from 'react';

import './tab-content-item.scss';

import AccordionList from '../accordion-list';

const TabContentItem = ({questionData, activeTab}) => {

    return (
        <div className="tab-content-item">
            { questionData.map(({id, entries}) => (
                <AccordionList key={id} elements={entries} isVisible={activeTab === id}/>
            )) }
        </div>
    );
};

export default TabContentItem;