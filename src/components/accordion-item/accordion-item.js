import React, { Component } from 'react';

import './accordion-item.scss';
import AccordionItemTitle from '../accordion-item-title';
import AccordionItemContent from '../accordion-item-content';

export default class AccordionItem extends Component {
    state = {
        isOpen: false
    }

    onToggleProperty() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onAccordionClick() {
        this.onToggleProperty();
    }

    render() {
        const { question, answer } = this.props.itemData;
        const { isOpen } = this.state;

        let classNames = 'accordion-item';

        if (isOpen) {
            classNames += ' is-open';
        }

        return (
            <div className={classNames}>
                <AccordionItemTitle text={question} onAccordionClick={() => this.onAccordionClick()}/>
                <AccordionItemContent text={answer} />
            </div>
        );
    }
};