import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from "react-bootstrap/Button";
import Jumbotron from 'react-bootstrap/Jumbotron'

class Work extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()   // Create a ref object
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ScrollableAnchor id={"about"}>
                <div className="about-div">
                    <Jumbotron className='about'>
                        <h2>so you're just gonna scroll by without saying meowdy?</h2>
                    </Jumbotron>
                    <Button variant="primary" className="back-to-top" onClick={this.componentDidMount}>Back to
                        Top</Button>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Work;