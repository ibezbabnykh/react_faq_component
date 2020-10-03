import React from 'react';

import './search-panel.scss';
import avatar from './avatar.png';

const SearchPanel = () => {
    return (
        <div className="search-panel">
            <div className="search-panel-holder">
                <div className="search-panel-logo">
                    <img src={avatar} alt="avatar" width="85" height="85" />
                </div>
                <form action="" className="search-panel-form">
                    <h5>Do you need some support? <br/>Type your question (key words)</h5>
                    <div className="form-group">
                        <input className="form-control" type="search" placeholder="Type your question (key words)"/>
                        <button type="button" className="btn"><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchPanel;