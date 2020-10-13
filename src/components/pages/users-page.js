import React, { Component } from 'react';

import ErrorBoundary from '../error-boundary';
import PageTitle from '../page-title';
import Row from '../row';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

export default class UsersPage extends Component {
    state = {
        selectedItem: 1
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    }

    render() {
        const { selectedItem } = this.state;
        return (
            <div className="pageBody center-holder">
                <PageTitle title="Users" />
                <ErrorBoundary>
                    <Row
                        leftColumn={<ItemList onItemSelected={this.onItemSelected} activeUSer={selectedItem} />}
                        rightColumn={<ItemDetails fetchAttr={selectedItem} />} />
                </ErrorBoundary>
            </div>
        );
    }
}