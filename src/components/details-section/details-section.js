import React from 'react';

import './details-section.scss';

import { withApiService, withData } from '../hoc-helper';

const DetailsSection = (props) => {
    return (
        <div className="details-section">Test</div>
    );
};

const mapMethodsToProps = (apiService) => {
    return {
        getData: apiService.getUser
    }
};

export default withApiService(mapMethodsToProps)(withData(DetailsSection));