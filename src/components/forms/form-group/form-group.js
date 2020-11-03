import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';

import './form-group.scss';

const FormGroup = ({ type, title, label, placeholder, options }) => {
    const { errors, touched } = useFormikContext();

    return (
        <div className="form-group">
            <label htmlFor={title}>{label} *</label>
            {!(type === 'select')
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

export default FormGroup;