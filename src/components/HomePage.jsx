import React, {Component} from 'react';
import NavigationBar from './NavigationBar';
import HomePageHeader from './HomePageHeader';
import AboutDerick from './AboutDerick';

export default class HomePage extends Component {
    render () {
        return (
            <div className='home-page-container'>
                <HomePageHeader />
                <NavigationBar />
                <AboutDerick />
            </div>
        );
    };
};