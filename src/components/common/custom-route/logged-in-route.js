import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedInRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            : <Component {...props} />
    )} />
)

export default LoggedInRoute;