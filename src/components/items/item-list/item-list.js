import React from 'react';

import './item-list.scss';

import { withApiService, withData } from '../../../hoc';

const ItemList = (props) => {
    const { data, onItemSelected, activeUSer } = props;

    const items = data.map((item) => {
        const { id, firstName, lastName } = item;
// difficult to read
        return (
            <li
                key={id}
                className={id === Number(activeUSer) ? 'active' : ''}
                onClick={() => onItemSelected(id)}
            >
                {firstName} {lastName}
            </li>
        );
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getUsersList
    }
};

export default withApiService(mapMethodsToProps)(withData(ItemList));