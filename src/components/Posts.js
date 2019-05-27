import React, {Component} from 'react';
import User from './User';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Posts extends Component{
    InstaService = new InstaService();

    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({posts});
    }

    onError = (error) => {
        this.setState({error});
    }

    renderItems(arr) {
        return arr.map((item) => {
            let {id, photo, name, altname, descr, src, alt} = item;
            return (
                <div key={id} className="post">
                     <User 
                        src={photo}
                        alt={altname}
                        name={name}
                        min
                    />
                     <img src={src} alt={alt}></img>
                     <div className="post__name">{name}</div>
                     <div className="post__descr">{descr}</div>
                </div>
            );
        });
    }

    render() {
        let {posts, error} = this.state;
        
        if (error) return <ErrorMessage />;

        return (
            <div className="left">
                {
                    this.renderItems(posts)
                }
            </div>
        );
    }
};