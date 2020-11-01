import React, { useState } from 'react';

import './accordion-list.scss';

import AccordionItem from '../accordion-item';
import LoadMoreButton from '../load-more-button';

const ITEMS_PER_PAGE = 10;

const AccordionList = ({
    elements: entries,
    isVisible
}) => {
    const [count, setCount] = useState(0);

    if (!isVisible) {
        return null;
    }

    const handleShowMoreItems = () => {
        setCount(count + ITEMS_PER_PAGE);
    };

    const total = entries.length;

    const items = entries.slice(0, (count + ITEMS_PER_PAGE));

    const isShowButton = items.length < total;

    return (
        <>
            <div className="accordion-list">
                {!items.length &&
                    <h5 className="no-results">No match results in this category, please try another query.</h5>
                }
                {items.map(item => (
                    <AccordionItem
                        key={item.id}
                        itemData={item}
                        id={item.id}
                    />
                ))}
            </div>
            {(total > ITEMS_PER_PAGE) && isShowButton &&
                <LoadMoreButton handleShowMoreItems={handleShowMoreItems} />
            }
        </>
    );
};

export default AccordionList;