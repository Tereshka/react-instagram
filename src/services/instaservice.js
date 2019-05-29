export default class InstaService {
    constructor() {
        this._apiBase = ' https://my-json-server.typicode.com/tereshka/react-instagram/';
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

    getAllPhotos = async () => {
        let res =  await this.getResource('posts/');
        return res.map(this._transformToPhotos);
    }

    getAllUsers = async () => {
        let res =  await this.getResource('posts/');
        return res.map(this._transformToUsers);
    }

    _transformToPhotos = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        };
    }

    _transformToUsers = (post) => {
        return {
            name: post.name,
            photo: post.photo,
            altname: post.altname,
            id: post.id
        };
    }
};