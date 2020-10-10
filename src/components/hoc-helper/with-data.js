import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true,
            error: false
        }

        componentDidMount() {
            this.update();
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.setState({
                    loading: true
                });
                this.update();
            }
        }

        update() {
            this.props.getData()
                .then(this.onLoad)
                .catch(this.onError);
        }

        onLoad = (data) => {
            this.setState({
                data,
                loading: false
            });
        }
    
        onError = () => {
            this.setState({
                error: true,
                loading: false
            });
        };

        render() {
            const { data, loading, error } = this.state;

            if (loading) {
                return <Spinner />
            }

            if (error) {
                return <ErrorIndicator />
            }

            return <View {...this.props} data={data} />
        }
    };
}

export default withData;