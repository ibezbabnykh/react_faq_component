import React from 'react';
import { connect, useFormikContext, Field, ErrorMessage } from 'formik';
import { isRequiredField } from '../../../utils';

import './form-group.scss';

const FormGroup = ({ formik, ...rest }) => {
    const { type, title, label, placeholder, options } = rest;
    const { errors, touched, validationSchema } = useFormikContext();

    return (
        <div className="form-group">
            <label htmlFor={title}>{label} *</label>
            {type !== 'select'
                ? <Field
                    name={title}
                    type={type}
                    placeholder={placeholder}
                    className={`form-control ${touched[title] && errors[title] ? 'has-error' : ''}`}
                />
                : <Field 
                    as="select" 
                    name={title}
                    className="form-control"
                >
                    {options.map(({ value, label, disabled }) => <option key={value} value={value} disabled={disabled}>{label}</option>)}
                </Field>
            }
            <ErrorMessage component="div" name={title} className="message-error" />
        </div>
    );
}

export default connect(FormGroup);