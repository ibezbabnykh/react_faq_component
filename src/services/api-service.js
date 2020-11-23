export default class ApiService {

    _localBase = 'http://localhost:9000/';

    getResource = async (url) => {
        const res = await fetch(`${this._localBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    };

    postResource = async (type, url, data) => {
        const res = await fetch(`${this._localBase}${url}`, {
            method: type,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    };

    postAuthenticate = async (url, data) => {
        const res = await fetch(`${this._localBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err);
        }

        return await res.json();
    };

    getQuestionsData = async (term) => {
        const res = await this.getResource('questions');
        return this.filterData(res, term);
    };

    getProducts = async () => {
        const res = await this.getResource('products');
        return res.map(this._transformProductFromList);
    }

    getEmployeesList = async () => {
        const res = await this.getResource('employees');
        return res.map(this._transformEmployeeFromList);
    }

    getEmployee = async (id) => {
        return await this.getResource(`employees/${id}`);
    }

    updateEmployee = async (id, data) => {
        await this.postResource('PUT', `employees/${id}`, data);
    }

    registerUser = async (data) => {
        await this.postAuthenticate('users', data);
    }

    loginUser = async (data) => {
        return await this.postAuthenticate('users/authenticate', data);
    }

    getUsers = async () => {
        return await this.getResource('users');
    }

    registerUser = async (data) => {
        await this.postAuthenticate('users', data);
    }

    loginUser = async (data) => {
        return await this.postAuthenticate('users/authenticate', data);
    }

    getUsers = async () => {
        return await this.getResource('users');
    }

    getUserWishList = async () => {
        return await this.getResource('userWishLists');
    }

    createWishList = async (data) => {
        await this.postResource('POST', 'userWishLists', data);
    }

    filterData = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }

        let newArray = [];

        arr.forEach(item => {
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

    _transformEmployeeFromList = (employee) => {
        const {
            id,
            avatar,
            email,
            first_name,
            last_name,
            position
        } = employee;

        return {
            id,
            avatar,
            email,
            firstName: first_name,
            lastName: last_name,
            position
        }
    }

    _transformProductFromList = (product) => {
        const {
            Name,
            Price,
            Brand,
            Season,
            Size,
            Color,
            Description,
            Category,
            Occassion
        } = product;

        return {
            id: product['Product ID'],
            name: Name,
            category: Category,
            price: Price,
            retailPrice: product['Retail Price'],
            brand: Brand,
            img: product['Thumbnail URL'],
            raitingAvg: product['Rating Avg'],
            raitngCount: product['Rating Count'],
            season: Season,
            size: Size,
            color: Color,
            description: Description,
            shoeSize: product['Shoe Size'],
            date: product['Date Created'],
            occassion: Occassion,
            inventoryCount: product['Inventory Count'],
            count: 0
        }
    }
}