import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { LoginSchema } from './login-schema';

import './login-form.scss';

import { withApiService } from '../../hoc';
import { compose } from '../../utils';
import { FormGroup } from '../forms';
import { login } from '../../actions';
import Spinner from '../common/spinner';

const LoginFrom = ({ loggingIn, onLogin }) => {
    if (loggingIn) {
        return <Spinner />
    }

    return (
        <div className="login-page column-holder">
            <div className="login-column column">
                <h3>Existing customer sign in</h3>
                <div className="intro">If you have already registered, please sign in below.</div>
                <div className="field-info">* Required field</div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={onLogin}
                >
                    <Form>
                        <FormGroup
                            title="email"
                            label="Email address"
                            type="text"
                            placeholder="Email address"
                        />
                        <FormGroup
                            title="password"
                            label="Password"
                            type="password"
                            placeholder="Password"
                        />
                        <div className="form-group">
                            <div className="checkbox-wrapper">
                                <Field type="checkbox" name="remember-me" id="remember-me" className="Checkbox Primary" />
                                <label
                                    htmlFor="remember-me"
                                    className="remember-me"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="login-submit">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Login
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
            <div className="register-column column">
                <h3>New to ΑΒ</h3>
                <div className="intro">Create an Account</div>
                <Link to="/register" className="btn btn-default">
                    Register
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = ({ authentication: { loggingIn } }) => {
    return { loggingIn };
}

const mapDispatchToProps = (dispatch, { postData }) => {
    return bindActionCreators({
        onLogin: login(postData)
    }, dispatch);
}

const mapMethodsToProps = (apiService) => {
    return {
        postData: apiService.loginUser
    }
}

export default compose(
    withApiService(mapMethodsToProps),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginFrom);