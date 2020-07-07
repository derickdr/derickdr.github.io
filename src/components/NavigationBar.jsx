import React, {Component} from 'react';

export default class NavigationBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>Art</li>
                    <li>Gaming</li>
                    <li>Sport</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    };
};
