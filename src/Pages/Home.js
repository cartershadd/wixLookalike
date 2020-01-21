import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Carousel from "react-bootstrap/Carousel";

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
                <div className="cat-div">
                    <Card className="cat-card">
                        <Carousel className="cat-carousel">
                            <Carousel.Item>
                                <img
                                    className="cc-img"
                                    src="/images/baby1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>time to create some chaos</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="cc-img"
                                    src="/images/baby2.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <p>make cute face.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="cc-img"
                                    src="/images/baby3.jpg"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <p>a nice warm laptop for me to sit on purr when being pet.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="cc-img"
                                    src="/images/baby4.jpg"
                                    alt="4th slide"
                                />

                                <Carousel.Caption>
                                    <p>Leave hair everywhere.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="cc-img"
                                    src="/images/baby5.jpeg"
                                    alt="5th slide"
                                />

                                <Carousel.Caption>
                                    <h3>refuse to leave cardboard box</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Card>


                    <Card className="cat-card">
                        <img className="cat-img" src="/images/babyCat.jpg" alt="cat"/>
                        <Card.Body className="cat-body">
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Rub face on everything
                                    {' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Baby in <cite title="ily">
                                    Memoirs of a Fuzzy Boy
                                </cite>
                                </footer>
                            </blockquote>
                            <Button align="center" variant="info" className="back-to-top" onClick={this.componentDidMount}>Back
                                to
                                Top</Button>
                        </Card.Body>
                    </Card>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Home;