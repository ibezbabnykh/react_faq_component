import React from 'react';

import './employees-list.scss';

import { withApiService, withData } from '../../../hoc';

const EmployeesList = ({ data, onItemSelected, activeEmployee }) => {
    const items = data.map(item => {
        const { id, firstName, lastName } = item;

        return (
            <li
                key={id}
                className={id === Number(activeEmployee) ? 'active' : ''}
                onClick={() => onItemSelected(id)}
            >
                {firstName} {lastName}
            </li>
        );
    });

    return (
        <ul className="employees-list list-group">
            {items}
        </ul>
    );
}

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getEmployeesList
    }
};

export default withApiService(mapMethodsToProps)(withData(EmployeesList));