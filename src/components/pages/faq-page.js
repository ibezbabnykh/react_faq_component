import React, { Component } from 'react';

import PageTitle from '../page-title';
import SearchPanel from '../search-panel';
import Tabs from '../tabs';

class FaqPage extends Component {
    state = {
        filter: ''
    }

    onSearchSubmit = (filter) => {
        this.setState({ filter });
    }

    render() {
        return (
            <div className="pageBody center-holder">
                <PageTitle title="FAQ" />
                <SearchPanel onSearchSubmit={this.onSearchSubmit} />
                <Tabs fetchAttr={this.state.filter} />
            </div>
        );
    };
}

export default FaqPage;