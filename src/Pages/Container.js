import React, {Component} from 'react';
import Contact from "./Contact";
import Home from './Home';
import About from './About';
import Work from './Work';

class Container extends Component {
    render() {
        return (
            <div className="tupperware">
                <Home/>
                <Work/>
                <About/>
                <Contact/>
            </div>
        );
    }
}

export default Container;