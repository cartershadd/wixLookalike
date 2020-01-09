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
                <div>
                    <Card className="sections">
                        <Card.Title>Work</Card.Title>
                        <Card.Img variant="top" src="rainbowCake.jpeg/" />
                        <Card.Body>
                            <Card.Text>
                                Sesame snaps croissant dragée. Muffin I love chocolate I love pie I love. Candy canes lollipop I love icing marzipan bear claw jujubes.

                                Gingerbread soufflé donut danish chocolate cake cake donut gingerbread marshmallow. Fruitcake soufflé I love candy. Chocolate bar jelly beans cheesecake chocolate bar chupa chups. Oat cake lemon drops lemon drops sweet I love biscuit lemon drops jujubes.

                                Tart sugar plum ice cream toffee chupa chups danish bear claw cheesecake candy canes. Halvah danish biscuit. Chupa chups gummies lemon drops.

                                Tart pastry sweet I love cake I love cupcake pastry. Marzipan pie fruitcake sugar plum pie liquorice marshmallow. I love croissant sweet roll I love. Jujubes liquorice muffin cake.

                                Macaroon gummies cookie cupcake. Jelly-o I love tootsie roll marshmallow I love chocolate bar lollipop soufflé. Cake apple pie chupa chups jujubes carrot cake halvah soufflé.
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