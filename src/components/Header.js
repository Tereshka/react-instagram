import React, {Component} from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <a className="logo" href="#">
                        <img alt="logo" src={logo}></img>
                    </a>
                    <nav className="links">
                        <ul>
                            <li><a className="menu__links" href="#">Лента</a></li>
                            <li><a className="menu__links" href="#">Профиль</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };
};