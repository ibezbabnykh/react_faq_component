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

    let classNames = 'accordion-item';

    if (isOpen) {
        classNames += ' is-open';
    }

    return (
        <div className={classNames}>
            <AccordionItemTitle
                text={question}
                onAccordionClick={onAccordionClick}
            />
            <AccordionItemContent text={answer} />
        </div>
    );
};

export default AccordionItem;