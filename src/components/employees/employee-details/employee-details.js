import React, { useState } from 'react';

import './employee-details.scss';

import { withApiService, withData } from '../../../hoc';
import { DetailsList, Record } from '../details-list';
import FormDetails from '../form-details';

const EmployeeDetails = ({ data }) => {
    const [employeeInfo, setEmployeeInfo] = useState(data);
    const [editMode, setEditMode] = useState(null);

    const { first_name, last_name, email, position, avatar, responsibility } = employeeInfo;

    const onEdit = () => {
        setEditMode(true);
    }

    const onFormClose = () => {
        setEditMode(false);
    }

    const onInfoUpdated = (data) => {
        setEmployeeInfo(data);
    }

    if (editMode) {
        return <FormDetails
            employeeInfo={employeeInfo}
            onInfoUpdated={onInfoUpdated}
            onFormClose={onFormClose}
        />
    }

    return (
        <div className="employee-details">
            <button
                type="button"
                className="btn-edit"
                onClick={onEdit}
            >
                <i className="fas fa-pencil-alt"></i>
            </button>
            <div className="avatar">
                <img src={avatar} alt="employee avatar" />
            </div>
            <DetailsList>
                <Record
                    label="Name"
                    field={`${first_name} ${last_name}`}
                />
                <Record
                    label="Email"
                    field={email}
                />
                <Record
                    label="Position"
                    field={position}
                />
            </DetailsList>
            <div className="info"><p>{responsibility}</p></div>
        </div>
    );
};

const mapMethodsToProps = (apiService, attr) => {
    return {
        getData: apiService.getEmployee.bind(this, attr)
    }
};

export default withApiService(mapMethodsToProps)(withData(EmployeeDetails));