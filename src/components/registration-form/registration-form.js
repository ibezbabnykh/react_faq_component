import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik, Form } from 'formik';
import { RegisterSchema } from './register-schema';

import './registration-form.scss';

import { withApiService } from '../../hoc';
import { compose } from '../../utils';
import { FormRow, FormGroup } from '../forms';
import { register } from '../../actions';
import Spinner from '../common/spinner';

const titleOptions = [{
    value: '',
    label: 'Title',
    disabled: true
},
{
    value: 'none',
    label: '-'
},
{
    value: 'ms',
    label: 'Ms'
},
{
    value: 'mr',
    label: 'Mr'
}];

const customerTypeOptions = [{
    value: 'Individual',
    label: 'Individual'
},
{
    value: 'Company',
    label: 'Company'
}];

const RegistrationForm = ({ registering, onRegister }) => {
    if (registering) {
        return <Spinner />
    }

    return (
        <Formik
            initialValues={{
                titleCode: '',
                customerType: customerTypeOptions[0].value,
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }}
            validationSchema={RegisterSchema}
            onSubmit={onRegister}
        >
            <Form className="registration-form">
                <strong className="subtext">* Please fill in all fields marked</strong>
                <div className="form-fieldset">
                <FormRow>
                    <FormGroup
                        title="titleCode"
                        label="Title"
                        type="select"
                        options={titleOptions}
                    />
                    <FormGroup
                        title="customerType"
                        label="Account type"
                        type="select"
                        options={customerTypeOptions}
                    />
                </FormRow>
                <FormRow>
                    <FormGroup
                        title="firstName"
                        label="First name"
                        type="text"
                        placeholder="First name"
                    />
                    <FormGroup
                        title="lastName"
                        label="Last name"
                        type="text"
                        placeholder="Last name"
                    />
                </FormRow>
                <FormRow>
                    <FormGroup
                        title="email"
                        label="Email Address"
                        type="email"
                        placeholder="Email address"
                    />
                    <FormGroup
                        title="password"
                        label="Password"
                        type="password"
                        placeholder="Password"
                    />
                </FormRow>
                </div>
                <div className="btn-holder">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <Link to="/login" className="btn btn-default">
                        Cancel
                    </Link>
                </div>
            </Form>
        </Formik>
    );
};

const mapStateToProps = ({ registration: { registering } }) => {
    return { registering }
};

const mapDispatchToProps = (dispatch, { postData }) => {
    return bindActionCreators({
        onRegister: register(postData)
    }, dispatch);
};

const mapMethodsToProps = (apiService) => {
    return {
        postData: apiService.registerUser
    }
};

export default compose(
    withApiService(mapMethodsToProps),
    connect(mapStateToProps, mapDispatchToProps)
)(RegistrationForm);