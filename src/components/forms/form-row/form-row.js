import React from 'react';

import './form-row.scss';

const FormRow = ({ children }) => {
    return (
        <div className="form-row">
            {
                React.Children.map(children, (child) => React.cloneElement(child))
            }
        </div>
    );
}

export default FormRow;