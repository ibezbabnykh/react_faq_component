import React from 'react';

import './accordion-item-title.scss';

const AccordionItemTitle = ({ text, onAccordionClick }) => {
    return (
        <div className="accordion-item-title" onClick={onAccordionClick}>
            <span>{text}</span>
            <i className="fas fa-chevron-down"></i>
        </div>
    );
};

export default AccordionItemTitle;