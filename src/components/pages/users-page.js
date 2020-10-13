import React, { useState } from 'react';

import ErrorBoundary from '../error-boundary';
import PageTitle from '../page-title';
import Row from '../row';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

const UsersPage = () => {
    const [selectedItem, setSelectedItem] = useState(1);

    const onItemSelected = (selectedItem) => {
        setSelectedItem(selectedItem);
    }

    return (
        <div className="pageBody center-holder">
            <PageTitle title="Users" />
            <ErrorBoundary>
                <Row
                    leftColumn={<ItemList onItemSelected={onItemSelected} activeUSer={selectedItem} />}
                    rightColumn={<ItemDetails fetchAttr={selectedItem} />} />
            </ErrorBoundary>
        </div>
    );
}

export default UsersPage;