import React, {Component} from 'react';

export default class ContactInformation extends Component {
    render () {
        return (
            <div className='contact-information-container'>
                <div className='contact-information-left-column'>
                    <h2 className='social-media-links-header'>Social Media</h2>
                    <ul className='social-media-links'>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>WeChat</li>
                        <li>Facebook</li>
                        {/*
                            Require icons positioned to the left of links, and sized relative to it
                        */}
                    </ul>
                </div>
                <div className='contact-information-right-column'>
                    <h2 className='other-links-header'>Other Links</h2>
                    <ul className='other-links'>
                        <li>YouTube</li>
                        <li>Twitch</li>
                        <li>E-mail</li>
                        {/*
                            Require icons positioned to the left of links, and sized relative to it
                        */}
                    </ul>
                </div>
            </div>
        );
    };
};