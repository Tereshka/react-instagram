import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import InstaService from '../services/instaservice';

export default class Palette extends Component {
    InstaService = new InstaService();

    state = {
        photos: [],
        error: false,
        loading: true,
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
        this.setState({photos, error: false, loading: false});
    }

    onError = (error) => {
        this.setState({error, loading: false});
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
        if (this.state.loading) return <Loader />;

        return (
            <div className="palette">
                {this.renderItems(this.state.photos)}
            </div>
        );
    }
}
