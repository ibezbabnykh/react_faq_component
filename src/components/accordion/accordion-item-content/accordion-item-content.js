import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './accordion-item-content.scss';

const AccordionItemContent = ({ text }) => {
    return (
        <div className="accordion-item-content">
            { ReactHtmlParser(text) }
        </div>
    );
};

export default AccordionItemContent;