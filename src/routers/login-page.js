import React from 'react';

import PageTitle from '../components/common/page-title';
import LoginFrom from '../components/login-form';

const LoginPage = () => {
    return (
        <>
            <PageTitle title="Login" />
            <LoginFrom />
        </>
    );
}

export default LoginPage;