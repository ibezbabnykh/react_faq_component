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
        <div className="pageBody center-holder">
            <PageTitle title="FAQ" />
            <SearchPanel onSearchSubmit={onSearchSubmit} />
            <Tabs fetchAttr={filter} />
        </div>
    );
}

export default FaqPage;