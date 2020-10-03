import React from 'react';

import './tab-content.scss';
import TabContentItem from '../tab-content-item';

const TabContent = ({questionData}) => {

    const [activeData] = questionData.filter((item) => {
        return item.active;
    });

    return (
        <div className="tab-content">
            <TabContentItem itemData={activeData} />
        </div>
    );
};

export default TabContent;