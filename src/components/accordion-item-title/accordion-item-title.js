import React, { Component } from 'react';

import './accordion-item-title.scss';

export default class AccordionItemTitle extends Component {
    render() {
        const {text, onAccordionClick} = this.props;

        return (
            <div className="accordion-item-title" onClick={onAccordionClick}>
                <span>{text}</span>
                <i className="fas fa-chevron-down"></i>
            </div>
        );
    };
};