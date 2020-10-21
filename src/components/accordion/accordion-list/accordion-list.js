import React, { useState } from 'react';

import './accordion-list.scss';

import AccordionItem from '../accordion-item';
import LoadMoreButton from '../load-more-button';

const AccordionList = (props) => {

    const [count, setCount] = useState(0);

    const itemsPerPage = 10;

    const handleShowMoreItems = () => {
        setCount(count + itemsPerPage);
    };

    const { elements: entries, isVisible } = props;

    if (!isVisible) return null;

    const total = entries.length;

    const elements = entries.slice(0, (count + itemsPerPage)).map((item) => {
        return (
            <AccordionItem key={item.id} itemData={item} id={item.id} />
        );
    });

    const isShowButton = elements.length < total;

    return (
        <>
            <div className="accordion-list">
                {elements.length === 0 &&
                    <h5 className="no-results">No match results in this category, please try another query.</h5>
                }
                {elements.length > 0 &&
                    <>
                        {elements}
                    </>
                }
            </div>
            {(total > itemsPerPage) && isShowButton &&
                <LoadMoreButton handleShowMoreItems={handleShowMoreItems} />
            }
        </>
    );
};

export default AccordionList;