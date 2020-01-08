import React, {Component} from 'react';

class NavPage extends Component {
    render() {
        return (
            <div className="nav">
                <a href='#home'>Home</a>

                <a href="#about">About</a>

                <a href="#work">Work</a>

                <a href="#contact">Contact</a>
            </div>
        );
    }
}

export default NavPage;