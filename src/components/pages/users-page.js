import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from '../error-boundary';
import PageTitle from '../page-title';
import Row from '../row';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

const UsersPage = ({ history, match }) => {
    const { id } = match.params;

    let details;

    if (typeof id === 'undefined') {
        details = <span>Select a item from a list</span>;
    } else {
        details = <ItemDetails fetchAttr={id} />
    }

    return (
        <React.Fragment>
            <PageTitle title="Users" />
            <ErrorBoundary>
                <Row
                    leftColumn={<ItemList onItemSelected={(id) => history.push(`${id}`)} activeUSer={id} />}
                    rightColumn={details} />
            </ErrorBoundary>
        </React.Fragment>
    );
}

export default withRouter(UsersPage);