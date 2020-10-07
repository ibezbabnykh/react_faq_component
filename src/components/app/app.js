import React, { Component } from 'react';

import './app.scss';

import ApiService from '../../services/api-service';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Tabs from '../tabs';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class App extends Component {

    ApiService = new ApiService();

    state = {
        questionData: [],
        filteredData: [],
        filter: '',
        currentActiveIndex: 0,
        loading: true,
        error: false,
        hasError: false
    }

    componentDidMount() {
        this.updateData();
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    updateData() {
        this.ApiService
            .getData('https://api.jsonbin.io/b/5f7c5fa1302a837e95758e63/')
            .then(this.onDataLoad)
            .catch(this.onError);
    }

    onDataLoad = (data) => {
        this.setState({
            questionData: data,
            filteredData: this.filterData(data, this.state.filter),
            loading: false
        });
    }

    onError = (err) => {
        console.log('err', err);
        this.setState({
            error: true,
            loading: false
        });
    };

    createNewItem(title, priority, id, entries) {
        return {
            "title": title,
            "priority": priority,
            "id": id,
            "entries": entries
        }
    }

    searchItems(items, term) {
        if (term.length === 0) {
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
            const { title, priority, id, entries } = item;
            const filterEntries = this.searchItems(entries, filter);
            const newItem = this.createNewItem(title, priority, id, filterEntries);

            newArray.push(newItem);
        });

        return newArray;
    }

    onTabClick = (id) => {
        this.setState({
            currentActiveIndex: id
        });
    }

    onSearchSubmit = (filter) => {
        this.setState({
            filteredData: this.filterData(this.state.questionData, filter),
            filter
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        
        const { filteredData, currentActiveIndex, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <Tabs questionData={filteredData} onTabClick={this.onTabClick} activeTab={currentActiveIndex}/> : null;

        return (
            <div className="app">
                <AppHeader />
                <SearchPanel onSearchSubmit={this.onSearchSubmit} />
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
};