import React, { useState } from 'react';

import './accordion-item.scss';
import AccordionItemTitle from '../accordion-item-title';
import AccordionItemContent from '../accordion-item-content';

const AccordionItem = (props) => {
    const [isOpen, setOpenState] = useState(false);

    const onAccordionClick = () => {
        setOpenState(!isOpen);
    }

    const { question, answer } = props.itemData;

    return (
        <div className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
            <AccordionItemTitle
                text={question}
                onAccordionClick={onAccordionClick} 
            />
            <AccordionItemContent text={answer} />
        </div>
    );
};

export default AccordionItem;