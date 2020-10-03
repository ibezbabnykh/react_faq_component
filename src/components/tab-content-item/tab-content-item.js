import React, { Component } from 'react';

import './tab-content-item.scss';

import AccordionItem from '../accordion-item';
import LoadMoreButton from '../load-more-button';

export default class TabContentItem extends Component {

    state = {
        count: 0
    }

    postsPerPage = 10;

    handleShowMoreItems = () => {
        this.setState((state) => {
            return {
                count: (state.count + this.postsPerPage)
            };
        });
    };

    render() {
        const { entries } = this.props.itemData;

        const elements = entries.slice(0, (this.state.count + this.postsPerPage)).map((item) => {
            return (
                <div key={item.id} className="tab-group-item">
                    <AccordionItem itemData={item} id={item.id}/>
                </div>
            );
        });

        const isShowButton = elements.length < entries.length;

        return (
            <div className="tab-content-item">
                <div className="accordion">
                    { elements }
                </div>
                {(entries.length > this.postsPerPage) && isShowButton &&
                    <LoadMoreButton handleShowMoreItems={this.handleShowMoreItems}/>
                }
            </div>
        );
    }; 
};