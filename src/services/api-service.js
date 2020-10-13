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

    getQuestionsData = async (term) => {
        const res = await this.getResource(this._apiBase, '5f7c5fa1302a837e95758e63/1');
        return this.filterData(res, term);
    };

    getUsersList = async () => {
        const res = await this.getResource(this._apiReqres, 'users/');
        return res.data.map(this._transformUserFromList);
    }

    getUser = async (id) => {
        const user = await this.getResource(this._apiReqres, `users/${id}`);
        return this._transformUser(user);
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
        return {
            id: user.id,
            avatar: user.avatar,
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name
        }
    }

    _transformUser = (user) => {
        const { id, avatar, email, first_name, last_name } = user.data;
        const { company, text } = user.ad;

        return {
            id,
            avatar,
            email,
            firstName: first_name,
            lastName: last_name,
            fullName: `${first_name} ${last_name}`,
            company,
            responsibility: text
        }
    }
}