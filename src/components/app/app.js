import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TabList from '../tab-list';
import TabContentItem from '../tab-content-item';

import './app.scss';

export default class App extends Component {

    state = {
        questionData: require('../../data.json'),
        filter: '',
        count: 0
    }

    createNewItem(title, priority, id, active, entries) {
        return {
            "title": title,
            "priority": priority,
            "id": id,
            "active": active,
            "entries": entries
        }
    }

    findIndexEl(id) {
        return this.state.questionData.findIndex((el) => el.id === id);
    }

    setActiveState = (arr, id, propName) => {
        const newArray = arr.slice();
        newArray.forEach((item) => {
            if(item[propName]) {
                item[propName] = false;
            }
        });
        const idx = this.findIndexEl(id);
        const oldItem = newArray[idx];
        const newItem = { ...oldItem, [propName]: true };

        return [
            ...newArray.slice(0, idx),
            newItem,
            ...newArray.slice(idx + 1)
        ];
    };

    onTabClick = (id) => {
        this.setState(({ questionData }) => {
            return {
                questionData: this.setActiveState(questionData, id, 'active')
            }
        });
    }

    onSearchSubmit = (filter) => {
        this.setState({ filter });
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
    };

    filterData = (items, filter) => {
        let newArray = [];
        items.forEach((item) => {
            let filterEntries = this.searchItems(item.entries, filter);
            let newItem = this.createNewItem(item.title, item.priority, item.id, item.active, filterEntries);

            newArray.push(newItem);
        });

        return newArray;
    }

    render() {
        const { questionData, filter, count } = this.state;
        const filteredData = this.filterData(questionData, filter);

        return (
            <div className="app">
                <AppHeader />
                <SearchPanel onSearchSubmit={this.onSearchSubmit}/>
                <TabList questionData={filteredData} onTabClick={this.onTabClick} />
                <TabContentItem questionData={filteredData} count={count} />
            </div>
        );
    }
};