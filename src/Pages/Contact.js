import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Button from 'react-bootstrap/Button';

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
                <div>
                    <h2>Contact</h2>
                    <p className="p">
                        I love pudding chocolate cake icing dessert candy canes.
                        Ice cream cheesecake chocolate bar candy canes I love tootsie roll I love brownie. Brownie
                        cheesecake chocolate halvah toffee cupcake chocolate cookie. Topping I love jelly candy muffin
                        tootsie roll tiramisu.
                        Tiramisu I love oat cake chocolate bar chocolate cake cotton candy macaroon liquorice wafer.
                        Jelly beans carrot cake jelly beans I love.
                        Sugar plum oat cake marshmallow I love.
                        Cake wafer carrot cake soufflé marshmallow icing.
                        Macaroon topping jelly beans I love I love I love.
                        Caramels cotton candy brownie powder. Bonbon dragée toffee I love dragée toffee carrot cake
                        cake.
                        Jelly cookie sweet roll jujubes oat cake candy chocolate bar.
                        I love gingerbread icing cookie apple pie liquorice tart gummies. Fruitcake cheesecake I love toffee apple pie I love ice cream chocolate bar candy. Tiramisu tootsie roll liquorice macaroon candy canes. Soufflé donut cheesecake candy I love cake. Soufflé I love chocolate. Dragée toffee cotton candy icing. Bear claw tootsie roll sugar plum. Cheesecake toffee I love sweet. Lollipop lemon drops tart fruitcake I love soufflé cotton candy cotton candy wafer. Oat cake marshmallow I love sesame snaps tiramisu tiramisu toffee cake jelly. Wafer tart donut toffee chocolate bar lollipop I love cupcake. Jelly gummi bears cake candy dragée gummies danish.

                        Cake jelly beans jelly I love cake candy jujubes gummies. Dessert tart jelly danish I love cheesecake I love icing. I love donut chocolate cake powder candy canes I love. Candy danish wafer I love jelly-o cotton candy pie. I love pie bear claw jelly beans marzipan caramels. Macaroon pie sweet roll cotton candy cupcake jujubes chocolate cake jujubes. Jujubes icing chupa chups. Jelly beans ice cream toffee. Candy sesame snaps marzipan tootsie roll fruitcake cake biscuit. Cookie chocolate bar sweet pastry cake. Icing cheesecake lemon drops gingerbread candy caramels apple pie caramels sweet roll. Soufflé sweet cotton candy bonbon marzipan gummi bears sesame snaps biscuit. Powder bonbon I love toffee jelly-o sugar plum. I love ice cream chocolate cake.

                        Candy jelly-o fruitcake macaroon caramels jelly beans. Lollipop marzipan cake chocolate. I love I love pastry. Dessert I love jelly-o cake gummies caramels marzipan dragée cake. Icing sweet roll wafer chocolate bar toffee. Dessert soufflé cheesecake cake. Pie candy cupcake pie I love. Caramels pastry gingerbread dessert pudding macaroon I love donut soufflé. Lollipop marshmallow chocolate chocolate bar I love pastry. Croissant chocolate cake bonbon lemon drops cake bear claw candy canes. I love gummies bear claw tiramisu marzipan candy liquorice. Gummi bears sugar plum jelly beans pastry muffin topping marzipan soufflé sesame snaps.
                    </p>
                    <Button variant="primary" onClick={this.componentDidMount}>Back to Top</Button>
                </div>
            </ScrollableAnchor>
        );
    }
}

export default Contact;