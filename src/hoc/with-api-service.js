import React, { useContext } from 'react';

import ApiServiceContext from '../components/common/api-service-context';

const withApiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        const apiService = useContext(ApiServiceContext);

        const serviceProps = (typeof props.fetchAttr === 'undefined' || props.fetchAttr === null) ? mapMethodsToProps(apiService) : mapMethodsToProps(apiService, props.fetchAttr);

        return <Wrapped {...props} {...serviceProps} />;
    }
}

export default withApiService;