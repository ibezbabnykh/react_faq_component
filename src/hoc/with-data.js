import React, { useState, useEffect, useMemo, useCallback } from 'react';

import Spinner from '../components/common/spinner';
import ErrorIndicator from '../components/common/error-indicator';

const withData = (View) => {
    return (props) => {
        const { getData } = props;

        const useRequestInfo = () => {
            const request = useCallback(() => getData(), [getData]);

            return useRequest(request);
        }

        const useRequest = (request) => {
            const initialState = useMemo(() => ({
                data: null,
                loading: true,
                error: null
            }), []);

            const [dataState, setDataState] = useState(initialState);

            useEffect(() => {
                setDataState(initialState);

                let cancelled = false;

                request()
                    .then(data => !cancelled && setDataState({
                        data,
                        loading: false,
                        error: null
                    }))
                    .catch(
                        error => !cancelled && setDataState({
                            data: null,
                            loading: false,
                            error
                        }));

                return () => cancelled = true;
            }, [request, initialState]);

            return dataState;
        }

        const { data, loading, error } = useRequestInfo();

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <View {...props} data={data} />
    }
}

export default withData;