import React from 'react';

import './form-details.scss';

import { withApiService } from '../hoc-helper';

const Record = ({ item, label, field, onHandleChange }) => {
    return <div className="form-group">
        <label htmlFor={`${label} ${item.id}`}>{label}</label>
        <input id={`${label} ${item.id}`}
            type="text" defaultValue={item[field]}
            placeholder={label}
            className="form-control" 
            name={label} 
            onChange={onHandleChange} />
    </div>
}

export {
    Record
}

const FormDetails = (props) => {

    const { userInfo, onFormClose } = props;

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onHandleChange = (e) => {
        
    }

    return (
        <div className="item-details">
            <button type="button" className="btn-close" onClick={onFormClose}>
                <i className="fas fa-times-circle"></i>
            </button>
            <form className="form-details" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-50">
                        <Record label="First Name" field="firstName" item={userInfo} onHandleChange={onHandleChange}/>
                    </div>

                    <div className="col-50">
                        <Record label="Last Name" field="lastName" item={userInfo} onHandleChange={onHandleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-50">
                        <Record label="Email" field="email" item={userInfo} onHandleChange={onHandleChange}/>
                    </div>
                    <div className="col-50">
                        <Record label="Company" field="company" item={userInfo} onHandleChange={onHandleChange}/>
                    </div>
                </div>
                <div className="btn-holder">
                    <button type="submit" className="btn btn-primary">Update info</button>
                </div>
            </form>
        </div>
    );
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.createUser
    }
};

export default withApiService(mapMethodsToProps)(FormDetails);