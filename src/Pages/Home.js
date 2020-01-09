import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

class Home extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()   // Create a ref object
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ScrollableAnchor id={"home"}>
                <div className="holder-div">
                    <Card className="home1">
                        <Card.Title>Home</Card.Title>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Cupcake ipsum dolor sit amet sweet dessert.
                                    {' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Pastry Cake in <cite title="ily">
                                    I LOVE ICING I LOVE COOKIE I LOVE CROISSANT
                                </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>

                    <Card className="home2" bg="light">
                        <Card.Body>
                            <Card.Text>
                                Chocolate croissant cake sesame snaps pudding. I love soufflé fruitcake bonbon.
                                Marshmallow dessert apple pie.
                                Lemon drops chocolate oat cake sweet roll I love macaroon candy canes.
                                Lemon drops apple pie caramels chocolate. Fruitcake bear claw I love halvah.
                                I love dragée icing cake fruitcake jelly icing caramels.
                                Jelly beans soufflé cake candy canes jelly-o halvah.
                            </Card.Text>
                        </Card.Body>
                        <Button variant="primary" className="back-to-top" onClick={this.componentDidMount}>Back to
                            Top</Button>
                    </Card>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Home;