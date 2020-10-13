import React from 'react';

import { ApiServiceConsumer } from '../api-service-context';

const withApiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <ApiServiceConsumer>
                {
                    (apiService) => {
                        const serviceProps = (typeof props.fetchAttr === 'undefined' || props.fetchAttr === null) ? mapMethodsToProps(apiService) : mapMethodsToProps(apiService, props.fetchAttr);

                        return (
                            <Wrapped {...props} {...serviceProps} />
                        );
                    }
                }
            </ApiServiceConsumer>
        );
    }
}

export default withApiService;