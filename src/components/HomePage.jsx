import React, {Component} from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import HomePageHeader from './HomePageHeader';
import AboutDerick from './AboutDerick';
import ContactInformation from './ContactInformation';

export default class HomePage extends Component {
    render () {
        return (
            <div className='home-page-container'>
                <HomePageHeader />
                <NavigationBar />
                <AboutDerick />
                <ContactInformation />
            </div>
        );
    };
};