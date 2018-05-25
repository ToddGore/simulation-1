import React from 'react';
import Product from './../Product/Product';
import './dashboard.css';


class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        // console.log("test ", this.props.appState)

        let mappedProducts = this.props.appState.map((items, index) => {
            return (
                <div key={index}>
                    <Product
                        name={items.name}
                        price={items.price}
                        image={items.image}
                    />

                </div>
            )


        })
        // Bring in inventory through props
        // map over inventory



        return (
            <div className="dash-container">
                {/* <Product /> */}
                Kello
                {mappedProducts}
            </div>
        );
    }
}

export default Dashboard;