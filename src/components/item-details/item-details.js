import React from 'react';

import './item-details.scss';

import { withApiService, withData } from '../hoc-helper';
import ItemDetailsList, { Record } from '../item-details-list';

const ItemDetails = (props) => {

    const { avatar, responsibility } = props.data;

    return (
        <div className="item-details">
            <button type="button" className="edit-btn">
                <i className="fas fa-pencil-alt"></i>
            </button>
            <div className="avatar">
                <img src={avatar} alt="user avatar" />
            </div>
            <ItemDetailsList {...props}>

                <Record label="Name" field="fullName" />
                <Record label="Email" field="email" />
                <Record label="Company" field="company" />

            </ItemDetailsList>
            <div className="info"><p>{responsibility}</p></div>
        </div>
    );
};

const mapMethodsToProps = (apiService, attr) => {
    return {
        getData: apiService.getUser.bind(this, attr)
    }
};

export default withApiService(mapMethodsToProps)(withData(ItemDetails));