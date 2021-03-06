import React, {Component} from 'react';
import User from './User';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import InstaService from '../services/instaservice';

export default class Users extends Component {

    InstaService = new InstaService();

    state = {
        users: [],
        error: false,
        loading: true,
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({users, error: false, loading: false});
    }

    onError = (error) => {
        this.setState({error, loading: false});
    }

    renderItems(arr) {
        return arr.map(item => {
            return (
                <User 
                    key={item.id}
                    src={item.photo}
                    alt={item.altname}
                    name={item.name}
                    min
                />
            );
        });
    }

    render() {
        if (this.state.error) return <ErrorMessage />;
        if (this.state.loading) return <Loader />;

        return (
            <div className="right">
                <User 
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630" 
                    alt="prince"
                    name="Harry"
                />
                <div className="users__block">
                    {this.renderItems(this.state.users)}
                </div>
            </div>
        );
    }
    
};