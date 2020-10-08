export default class ApiService {

    _apiBase = 'https://api.jsonbin.io/b/';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`, {
            headers: {
                'secret-key': '$2b$10$P8lL8g.Ri/1qRA/qJEjuaO.B7wU50rWhpHsibzoSNhsH0S4dmqBvO'
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
        }

        return await res.json();
    };

    getData = async (url, term) => {
        const res = await this.getResource(url);
        return this.filterData(res, term);
    };

    filterData = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }

        let newArray = [];

        arr.forEach((item) => {
            const { title, priority, id, entries } = item;

            const filterEntries = this.searchItems(entries, term);
            const newItem = this.createNewItem(title, priority, id, filterEntries);

            newArray.push(newItem);
        });

        return newArray;
    };

    searchItems = (items, term) => {
        return items.filter((item) => {
            return item.question
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    };

    createNewItem = (title, priority, id, entries) => {
        return {
            title,
            priority,
            id,
            entries
        }
    };
}