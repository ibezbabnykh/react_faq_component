import React, { Component } from 'react';

import './accordion-list.scss';

import AccordionItem from '../accordion-item';
import LoadMoreButton from '../load-more-button';

export default class AccordionList extends Component {

    state = {
        count: 0
    }

    itemsPerPage = 10;

    handleShowMoreItems = () => {
        this.setState((state) => {
            return {
                count: (state.count + this.itemsPerPage)
            };
        });
    };

    render() {
        const { elements: entries, isVisible } = this.props;

        if (!isVisible) return null;

        const total = entries.length;

        const elements = entries.slice(0, (this.state.count + this.itemsPerPage)).map((item) => {
            return (
                <div key={item.id} className="accordion-group-item">
                    <AccordionItem itemData={item} id={item.id}/>
                </div>
            );
        });

        const isShowButton = elements.length < total;

        return (
            <div className="accordion-list">
                {elements.length === 0 &&
                    <h5 className="no-results">No match results in this category, please try another query.</h5>
                }
                {elements.length > 0 &&
                    <div className="accordion">
                        { elements }
                    </div>
                }
                {(total > this.itemsPerPage) && isShowButton &&
                    <LoadMoreButton handleShowMoreItems={this.handleShowMoreItems}/>
                }
            </div>
        );
    }; 
};