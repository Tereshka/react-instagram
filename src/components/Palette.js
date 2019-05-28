import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Palette extends Component {
    InstaService = new InstaService();

    state = {
        photos: [],
        error: false
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError);
    }

    onPhotosLoaded = (photos) => {
        this.setState({photos});
    }

    onError = (error) => {
        this.setState({error});
    }

    renderItems(arr) {
        return arr.map((item) => {
            let {id, src, alt} = item;
            return (
                <img key={id}
                    src={src}
                    alt={alt}
                ></img>
            );
        });
    }

    render() {
        if (this.state.error) return <ErrorMessage />;

        return (
            <div className="palette">
                {this.renderItems(this.state.photos)}
            </div>
        );
    }
}
