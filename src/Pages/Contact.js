import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()   // Create a ref object
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ScrollableAnchor id={"contact"}>
                <div className="contact">
                    <Card className="text-center">
                        <Card.Header>Contact</Card.Header>
                        <Card.Body>
                            <Card.Title>I love jelly candy canes.</Card.Title>
                            <Card.Text>
                                Marshmallow cake dessert.
                            </Card.Text>
                            <Button
                                variant="primary"
                                className="back-to-top"
                                onClick={this.componentDidMount}>
                                Back to Top
                            </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Chocolate cake brownie topping.</Card.Footer>
                    </Card>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Contact;