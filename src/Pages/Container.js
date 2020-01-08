import React, {Component} from 'react';
import Contact from "./Contact";
import Home from './Home';
import Work from './Work';
import About from './About';

class Container extends Component {
    render() {
        return (
            <div>
                <Home/>
                <About/>
                <Work/>
                <Contact/>
            </div>
        );
    }
}

export default Container;