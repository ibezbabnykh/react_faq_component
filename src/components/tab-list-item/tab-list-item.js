import React, { Component } from 'react';

import './tab-list-item.scss';

export default class TabListItem extends Component {
    
    render() {
        const { title, entries, onTabClick, active } = this.props;

        let classNames = 'tab-list-item';

        if(active) {
            classNames += ' active';
        }

        return (
            <span className={classNames} 
                onClick={onTabClick}>
                    {title} ({entries.length})
            </span>
        );
    }
};