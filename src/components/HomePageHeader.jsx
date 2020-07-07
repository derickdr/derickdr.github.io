import React, {Component} from 'react';

export default class HomePageHeader extends Component {
    render () {
        return (
            <div className='homepage-header'>
                <div className='landing-quote-container'>
                    <h1 className='landing-quote'>Movement</h1>
                </div>
                <div classname='empty-container'>
                </div>
            </div>
        );
    };
};