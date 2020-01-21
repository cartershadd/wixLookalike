import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

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
            <ScrollableAnchor id={"work"}>
                <div className="work-div">
                    <Card className="work">
                        <Card.Body className="work-text">
                            <Card.Text>
                                I like big cats and i can not lie i bet my nine lives on you-oooo-ooo-hooo i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk
                            </Card.Text>
                            <img className="work-img" src="/images/roundBaby.jpg" alt="cat"/>
                        </Card.Body>
                        <Button variant="primary" className="back-to-top" onClick={this.componentDidMount}>Back to Top</Button>
                    </Card>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Work;