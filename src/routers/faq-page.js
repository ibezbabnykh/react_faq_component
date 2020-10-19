import React, { useState } from 'react';

import PageTitle from '../components/common/page-title';
import SearchPanel from '../components/search-panel';
import Tabs from '../components/tabs';

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