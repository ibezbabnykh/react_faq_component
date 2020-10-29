import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from '../components/common/error-boundary';
import PageTitle from '../components/common/page-title';
import Row from '../components/common/row';
import ItemList from '../components/items/item-list';
import ItemDetails from '../components/items/item-details';

const UsersPage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <>
            <PageTitle title="Users" />
            <ErrorBoundary>
                <Row
                    leftColumn={(
                        <ItemList
                            onItemSelected={(id) => history.push(`${id}`)}
                            activeUSer={id}
                        />
                    )}
                    rightColumn={
                        typeof id === 'undefined'
                            ? (<span>Select a item from a list</span>)
                            : <ItemDetails fetchAttr={id} />
                        }
                />
            </ErrorBoundary>
        </>
    );
}

export default withRouter(UsersPage);