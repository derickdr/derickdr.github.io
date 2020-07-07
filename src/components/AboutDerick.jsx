import React, {Component} from 'react';

export default class AboutDerick extends Component {
    render () {
        return (
            <div className='about-derick-container'>
                <div className='derick-container'>
                    {/*
                        Requires 4 images to be loaded on selection with a default to load
                        Relevant to stats display
                    */}
                </div>
                <div className='derick-stats-container'>
                    {/*
                        Requires 4 components to be loaded on selection with a default to load
                            1.) Programming Skills
                            2.) Personality Traits
                            3.) Physical Stats
                            4.) Likes / Dislikes
                    */}
                </div>
                <div className='values-container'>
                    <div className='derick-container'>

                    </div>
                    <div className='values'>
                        <h2 className='values-body'>Always ask yourself who you are, because no one will be able to tell you that but you.</h2>
                    </div>
                </div>
            </div>
        );
    };
};