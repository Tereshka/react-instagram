export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/';
    }

    getResource = async (url) => {
        let res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        return res.json();
    }

    getAllPosts = async () => {
        return await this.getResource('posts/');
    }
};