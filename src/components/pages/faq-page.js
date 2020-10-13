import React from 'react';
import { Component } from 'react';

import PageTitle from '../page-title';
import SearchPanel from '../search-panel';
import Tabs from '../tabs';

class FaqPage extends Component {
    state = {
        filter: ''
    }

    onSearchSubmit = (filter) => {
        this.setState({
            filter
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="pageBody center-holder">
                    <PageTitle title="FAQ" />
                    <SearchPanel onSearchSubmit={this.onSearchSubmit} />
                    <Tabs fetchAttr={this.state.filter} />
                </div>
            </React.Fragment>
        );
    };
}

export default FaqPage;