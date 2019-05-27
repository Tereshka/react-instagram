import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component{
    render() {
        return (
            <div className="left">
                <Post alt='fsf' 
                    src='https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
                    name='safas' 
                    descr='lor ewfwef  wef wf wef wfwfwf wfwefwfwf fwfwem wefwf' />
            </div>
        );
    }
};