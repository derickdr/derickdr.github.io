import React, {Component} from 'react';

export default class NavigationBar extends Component {
<<<<<<< HEAD

    constructor(props) {
    super(props)
    }

    render() {
        const element = (<div>Text from Element</div>)
        return (<div className="comptext">
        <h3>First Component</h3>
            {this.props.displaytext}
            { element }
        </div>)
    }
}
=======
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
>>>>>>> about-derick
