import React, { Component } from 'react';

import './accordion-list.scss';

import AccordionItem from '../accordion-item';
import LoadMoreButton from '../load-more-button';

export default class AccordionList extends Component {

    static defaultProps = {
        itemsPerPage: 10
    };

    state = {
        count: 0
    }

    handleShowMoreItems = () => {
        this.setState((state) => {
            return {
                count: (state.count + this.props.itemsPerPage)
            };
        });
    };

    render() {
        const { elements: entries, isVisible, itemsPerPage } = this.props;
        const { count } = this.state;

        if (!isVisible) return null;

        const total = entries.length;

        const elements = entries.slice(0, (count + itemsPerPage)).map((item) => {
            return (
                <AccordionItem key={item.id} itemData={item} id={item.id} />
            );
        });

        const isShowButton = elements.length < total;

        return (
            <React.Fragment>
                <div className="accordion-list">
                    {elements.length === 0 &&
                        <h5 className="no-results">No match results in this category, please try another query.</h5>
                    }
                    {elements.length > 0 &&
                        <React.Fragment>
                            {elements}
                        </React.Fragment>
                    }
                </div>
                {(total > itemsPerPage) && isShowButton &&
                    <LoadMoreButton handleShowMoreItems={this.handleShowMoreItems} />
                }
            </React.Fragment>
        );
    };
};