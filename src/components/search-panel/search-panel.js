import React, { Component } from 'react';

import './search-panel.scss';
import avatar from './avatar.png';

export default class SearchPanel extends Component {
    state = {
        term: ''
    }

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    };

    onSearchChange = (e) => {
        this.setState({
            term: e.target.value
        });
    };

    render() {
        return (
            <div className="search-panel">
                <div className="search-panel-holder">
                    <div className="search-panel-logo">
                        <img src={avatar} alt="avatar" width="85" height="85" />
                    </div>
                    <form className="search-panel-form"
                        onSubmit={this.onSearchSubmit}>
                        <h5>Do you need some support? <br />Type your question (key words)</h5>
                        <div className="form-group">
                            <input className="form-control"
                                type="text"
                                placeholder="Type your question (key words)"
                                onChange={this.onSearchChange} />
                            <button type="button" className="btn"><i className="fas fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
};