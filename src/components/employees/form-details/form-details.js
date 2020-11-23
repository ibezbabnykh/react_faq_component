import React from 'react';
import { Formik, Form } from 'formik';

import './form-details.scss';

import { withApiService } from '../../../hoc';
import { FormRow, FormGroup } from '../../forms';

const positionOptions = [{
    value: 'Cashier',
    label: 'Cashier'
},
{
    value: 'Inventory Control Specialist',
    label: 'Inventory Control Specialist'
},
{
    value: 'Sales Associate',
    label: 'Sales Associate'
},
{
    value: 'Customer Service Representative',
    label: 'Customer Service Representative'
},
{
    value: 'Store Manager',
    label: 'Store Manager'
},
{
    value: 'Assistant Store Manager',
    label: 'Assistant Store Manager'
}];

const FormDetails = ({ employeeInfo, onInfoUpdated, onFormClose, postData }) => {
    const { id, first_name, last_name, email, position } = employeeInfo;

    const onHandleSubmit = (values) => {
        const newInfo = {
            ...employeeInfo,
            ...values
        }
        if (JSON.stringify(employeeInfo) !== JSON.stringify(newInfo)) {
            postData(id, newInfo)
            .then(onInfoUpdated(newInfo));
        }
        onFormClose();
    }

    return (
        <div className="employee-details">
            <button
                type="button"
                className="btn-close"
                onClick={onFormClose}
            >
                <i className="fas fa-times-circle"></i>
            </button>
            <Formik
                initialValues={{
                    first_name,
                    last_name,
                    email,
                    position
                }}
                onSubmit={onHandleSubmit}
            >
                <Form className="form-details">
                    <FormRow>
                        <FormGroup
                            title="first_name"
                            label="First Name"
                            type="text"
                        />
                        <FormGroup
                            title="last_name"
                            label="Last Name"
                            type="text"
                        />
                    </FormRow>
                    <FormRow>
                        <FormGroup
                            title="email"
                            label="Email"
                            type="email"
                        />
                        <FormGroup
                            title="position"
                            label="Position"
                            type="select"
                            options={positionOptions}
                        />
                    </FormRow>
                    <div className="btn-holder">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Update info
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

const mapMethodsToProps = (apiService) => {
    return {
        postData: apiService.updateEmployee
    }
};

export default withApiService(mapMethodsToProps)(FormDetails);