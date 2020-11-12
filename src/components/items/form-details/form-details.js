import React from 'react';

import './form-details.scss';

import { withApiService } from '../../../hoc';
import { formData } from '../../../helpers';
import Record from './record';

const FormDetails = (props) => {
    const { userInfo, onFormClose, getData } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            ...userInfo,
            ...formData(new FormData(e.target))
        };
        getData(userInfo.id, data);
        onFormClose();
    }

    return (
        <div className="item-details">
            <button
                type="button"
                className="btn-close"
                onClick={onFormClose}
            >
                <i className="fas fa-times-circle"></i>
            </button>
            <form className="form-details" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-50">
                        <Record
                            label="First Name"
                            field="first_name"
                            item={userInfo}
                        />
                    </div>

                    <div className="col-50">
                        <Record
                            label="Last Name"
                            field="last_name"
                            item={userInfo}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-50">
                        <Record
                            label="Email"
                            field="email"
                            item={userInfo}
                        />
                    </div>
                    <div className="col-50">
                        <Record
                            label="Company"
                            field="company"
                            item={userInfo}
                        />
                    </div>
                </div>
                <div className="btn-holder">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Update info
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.updateCustomer
    }
};

export default withApiService(mapMethodsToProps)(FormDetails);