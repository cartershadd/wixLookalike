import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

class About extends Component {
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
                <div className="section-container">
                    <Card className="section1" bg="info" text="white">
                        <Card.Header>About</Card.Header>
                        <Card.Body>
                            <Card.Title>Candy biscuit carrot cake danish topping.</Card.Title>
                            <Card.Text>
                                Jelly-o I love jelly beans oat cake cake cheesecake croissant jelly.
                                Marshmallow tiramisu marshmallow gingerbread gingerbread.
                                Jelly danish biscuit chupa chups gummi bears topping.
                                Cotton candy oat cake icing biscuit pastry bear claw.
                            </Card.Text>
                        </Card.Body>
                        <Button
                            variant="primary"
                            className="back-to-top"
                            onClick={this.componentDidMount}>
                            Back to Top
                        </Button>
                    </Card>
                    <img src="/images/rainbowCake.jpeg" alt="cake" className="image"/>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default About;