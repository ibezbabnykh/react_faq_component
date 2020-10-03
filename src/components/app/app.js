import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TabList from '../tab-list';
import TabContent from '../tab-content';

import './app.scss';

export default class App extends Component {
    maxId = 100;

    incomingData = require('../../data.json');

    state = {
        questionData: this.getCommonData(this.incomingData)
    }

    getCommonData(arr) {
        const newArray = arr.slice();
        const newEntries = [];

        newArray.forEach((item) => {
            item.entries.forEach((item) => {
                let newItem = {...item};
                newItem.id += Math.floor(Math.random()*10000);
                newEntries.push(newItem);
            });
        });

        const newItem = {
            "title": "Everything",
            "priority": 900,
            "id": this.maxId++,
            "active": true,
            "entries": newEntries
        };

        return [
            newItem,
            ...newArray
        ];
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

    render() {
        const { questionData } = this.state;

        return (
            <div className="app">
                <AppHeader />
                <SearchPanel />
                <TabList questionData={ questionData } onTabClick={this.onTabClick} />
                <TabContent questionData={ questionData } />
            </div>
        );
    }
};