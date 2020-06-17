import React, { Component } from 'react';

class NavigationBar extends Component {
    render() { 
        return (
            <nav class=''>
                <div class=''>
                    <ul class=''>
                        <li>About</li>
                        <li>Gaming</li>
                        <li>Art</li>
                        <li>Kendama</li>
                        <li>Projects</li>
                    </ul>
                </div>
            </nav>
        );
    };
};
 
export default NavigationBar;