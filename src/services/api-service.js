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

    getQuestionsData = async (term) => {
        const res = await this.getResource('questions');
        return this.filterData(res, term);
    };

    getProducts = async () => {
        const res = await this.getResource('products');
        return res.map(this._transformProductFromList);
    }

    getCustomersList = async () => {
        const res = await this.getResource('customers');
        return res.map(this._transformCustomerFromList);
    }

    getCustomer = async (id) => {
        const customer = await this.getResource(`customers/${id}`);
        return this._transformCustomer(customer);
    }

    updateCustomer = async (id, data) => {
        await this.postResource('PUT', `customers/${id}`, data);
    }

    getUserWishList = async () => {
        const res = await this.getResource('userWishLists');
        return res;
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

    _transformCustomerFromList = (customer) => {
        const { id, avatar, email, first_name, last_name } = customer;

        return {
            id,
            avatar,
            email,
            firstName: first_name,
            lastName: last_name
        }
    }

    _transformCustomer = (customer) => {
        const { id, avatar, email, first_name, last_name, company, responsibility } = customer;

        return {
            id,
            avatar,
            email,
            first_name,
            last_name,
            fullName: `${first_name} ${last_name}`,
            company,
            responsibility
        }
    }

    _transformProductFromList = (product) => {
        const { Name, Price, Brand, Season, Size, Color, Description, Category, Occassion } = product;

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