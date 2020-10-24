import React from 'react';

import PageTitle from '../components/common/page-title';
import Checkout from '../components/checkout';

const CheckoutPage = () => {
    return (
        <>
            <PageTitle title="Checkout"/>
            <Checkout />
        </>
    );
}

export default CheckoutPage;