import React, { useState } from 'react';

import './search-panel.scss';
import avatar from './avatar.png';

const SearchPanel = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
    };

    const handleChange = (e) => {
        setTerm(e.target.value);
    };

    return (
        <div className="search-panel">
            <div className="search-panel-holder">
                <div className="search-panel-logo">
                    <img src={avatar} alt="avatar" width="85" height="85" />
                </div>
                <form
                    className="search-panel-form"
                    onSubmit={handleSubmit}
                >
                    <h5>Do you need some support? <br />Type your question (key words)</h5>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Type your question (key words)"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="btn"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchPanel;