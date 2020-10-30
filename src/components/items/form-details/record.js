import React from 'react';

const Record = ({ item, label, field }) => {
    return (
        <div className="form-group">
            <label htmlFor={`${label} ${item.id}`}>
                {label}
            </label>
            <input
                id={`${label} ${item.id}`}
                type="text"
                defaultValue={item[field]}
                placeholder={label}
                className="form-control"
                name={field}
            />
        </div>
    );
}

export default Record;