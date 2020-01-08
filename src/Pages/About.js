import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from "react-bootstrap/Button";

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
                <div>
                    <h2>About</h2>
                    <p className="p">
                        Liquorice candy candy I love I love sugar plum.
                        I love ice cream lollipop. Bonbon I love I love pudding gummi bears.
                        I love lemon drops cheesecake.
                        Jelly-o sugar plum I love pie I love toffee jujubes liquorice.
                        Sesame snaps topping tart lollipop brownie jelly beans sweet.
                        Sesame snaps cupcake oat cake donut tart ice cream.
                        I love dessert marshmallow jelly carrot cake pie jelly-o.
                        Sesame snaps tootsie roll chocolate cake.
                        I love gummi bears toffee muffin chocolate I love gummi bears sweet danish.
                        I love chocolate bar I love liquorice lollipop. Chupa chups chocolate cheesecake jelly.
                        Fruitcake pie icing topping soufflé.
                        Brownie apple pie pastry carrot cake halvah tart icing. Chupa chups bear claw wafer I love tootsie roll marshmallow sweet roll jelly. Lollipop sesame snaps I love I love dragée I love candy sweet roll. Halvah tiramisu toffee carrot cake marzipan jelly beans liquorice. Cookie carrot cake soufflé marshmallow. Chupa chups lemon drops I love fruitcake. Cheesecake gummi bears candy I love cupcake cotton candy. Soufflé tiramisu lollipop. Cupcake pie jelly-o. Ice cream tootsie roll caramels cookie I love gingerbread. Cake toffee pudding cupcake marshmallow muffin. Cookie donut liquorice cake danish icing sweet. Cookie gummies tootsie roll I love. Biscuit cake I love tiramisu dessert.
                    </p>
                    <Button variant="primary" onClick={this.componentDidMount}>Back to Top</Button>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default About;