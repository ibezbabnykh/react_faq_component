export default class ApiService {

    _apiBase = 'https://api.jsonbin.io/b/';

    _apiReqres = 'https://reqres.in/api/';

    getResource = async (base, url) => {
        const res = await fetch(`${base}${url}`, {
            headers: {
                'secret-key': '$2b$10$P8lL8g.Ri/1qRA/qJEjuaO.B7wU50rWhpHsibzoSNhsH0S4dmqBvO'
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    };

    putResource = async (base, url, data) => {
        const res = await fetch(`${base}${url}`, {
            method: 'PUT',
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
        const res = await this.getResource(this._apiBase, '5f7c5fa1302a837e95758e63/1');
        return this.filterData(res, term);
    };

    getBooks = async () => {
        const res = await this.getResource(this._apiBase, '5f913710058d9a7b94decb99');
        return res.map(this._transformProductFromList);
    }

    getUsersList = async () => {
        const res = await this.getResource(this._apiReqres, 'users/');
        return res.data.map(this._transformUserFromList);
    }

    getUser = async (id) => {
        const user = await this.getResource(this._apiReqres, `users/${id}`);
        return this._transformUser(user);
    }

    updateUser = async (data) => {
        const res = await this.putResource(this._apiReqres, 'users/', data);
        return res;
    }

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

    _transformUserFromList = (user) => {
        const { id, avatar, email, first_name, last_name } = user;

        return {
            id,
            avatar,
            email,
            firstName: first_name,
            lastName: last_name
        }
    }

    _transformUser = (user) => {
        const { id, avatar, email, first_name, last_name } = user.data;
        const { company, text } = user.ad;

        return {
            id,
            avatar,
            email,
            first_name,
            last_name,
            fullName: `${first_name} ${last_name}`,
            company,
            responsibility: text
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
            inventoryCount: product['Inventory Count']
        }
    }
}