import React, { useState } from 'react';

import './item-details.scss';

import { withApiService, withData } from '../../../hoc';
import ItemDetailsList, { Record } from '../item-details-list';
import FormDetails from '../form-details';

const ItemDetails = (props) => {
    const [editMode, setEditMode] = useState(false);

    const { avatar, responsibility } = props.data;

    const onEdit = () => {
        setEditMode(true);
    }

    const onFormClose = () => {
        setEditMode(false);
    }

    if (editMode) {
        return <FormDetails userInfo={props.data} onFormClose={onFormClose} />
    }

    return (
        <div className="item-details">
            <button
                type="button"
                className="btn-edit"
                onClick={onEdit}
            >
                <i className="fas fa-pencil-alt"></i>
            </button>
            <div className="avatar">
                <img src={avatar} alt="user avatar" />
            </div>
            <ItemDetailsList {...props}>

                <Record 
                    label="Name" 
                    field="fullName" 
                />
                <Record 
                    label="Email" 
                    field="email" 
                />
                <Record 
                    label="Company" 
                    field="company"
                />

            </ItemDetailsList>
            <div className="info"><p>{responsibility}</p></div>
        </div>
    );
};

const mapMethodsToProps = (apiService, attr) => {
    return {
        getData: apiService.getCustomer.bind(this, attr)
    }
};

export default withApiService(mapMethodsToProps)(withData(ItemDetails));