import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TabList from '../tab-list';
import TabContent from '../tab-content';

import './app.scss';

export default class App extends Component {

    state = {
        questionData: require('../../data.json'),
        filter: '',
        currentActiveIndex: 0
    }

    createNewItem(title, priority, id, entries) {
        return {
            "title": title,
            "priority": priority,
            "id": id,
            "entries": entries
        }
    }

    searchItems(items, term) {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.question
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }

    filterData = (items, filter) => {
        let newArray = [];

        items.forEach((item) => {
            const {title, priority, id, entries} = item;
            let filterEntries = this.searchItems(entries, filter);
            let newItem = this.createNewItem(title, priority, id, filterEntries);

            newArray.push(newItem);
        });

        return newArray;
    }

    onTabClick = (id) => {
        this.setState( {
            currentActiveIndex: id
        });
    }

    onSearchSubmit = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { questionData, filter, currentActiveIndex } = this.state;
        const filteredData = this.filterData(questionData, filter);

        return (
            <div className="app">
                <AppHeader />
                <SearchPanel onSearchSubmit={this.onSearchSubmit}/>
                <TabList questionData={filteredData} onTabClick={this.onTabClick} activeTab={currentActiveIndex} />
                <TabContent questionData={filteredData} activeTab={currentActiveIndex} />
            </div>
        );
    }
};