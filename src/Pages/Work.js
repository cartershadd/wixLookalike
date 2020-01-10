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
                        <Card.Title>Work</Card.Title>
                        <img className="work-img" src="/images/placeholder.png" alt="placeholder"/>
                        <Card.Body>
                            <Card.Text>
                                Sesame snaps croissant dragée. Muffin I love chocolate I love pie I love. Candy canes lollipop I love icing marzipan bear claw jujubes.
                                Gingerbread soufflé donut.
                            </Card.Text>
                        </Card.Body>
                        <Button variant="primary" className="back-to-top" onClick={this.componentDidMount}>Back to Top</Button>
                    </Card>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Work;