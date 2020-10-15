import React, { useState } from 'react';

import PageTitle from '../page-title';
import SearchPanel from '../search-panel';
import Tabs from '../tabs';

const FaqPage = () => {
    const [filter, setFilter] = useState('');

    const onSearchSubmit = (filter) => {
        setFilter(filter);
    }

    return (
        <React.Fragment>
            <PageTitle title="FAQ" />
            <SearchPanel onSearchSubmit={onSearchSubmit} />
            <Tabs fetchAttr={filter} />
        </React.Fragment>
    );
}

export default FaqPage;