import React from 'react';

const PaymentButton = ({isDisabled}) => {
    return (
        <button
            type="button"
            className="btn btn-primary w-full"
            disabled={isDisabled ? 'disabled' : ''}
        >
            Go to payment
        </button>
    );
}

export default PaymentButton;