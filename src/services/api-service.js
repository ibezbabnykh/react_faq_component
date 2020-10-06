export default class ApiService {
    async getResource(url) {
        const res = await fetch(url, {
            headers: {
                'secret-key': '$2b$10$P8lL8g.Ri/1qRA/qJEjuaO.B7wU50rWhpHsibzoSNhsH0S4dmqBvO'
            }
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
        }

        return await res.json();
    }

    async getData(url) {
        const res = await this.getResource(url);

        return res;
    }
}