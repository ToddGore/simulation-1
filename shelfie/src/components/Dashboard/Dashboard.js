import React from 'react';
import Product from './../Product/Product';

class Dashboard extends React.Component {
    // state = {}

    render() {
        // console.log("test ", this.props.appState)

        let mappedProducts = this.props.appState.map((items) => {
            return items
        })
        // Bring in inventory through props
        // map over inventory



        return (
            <div>
                mappedProducts
            </div>
        );
    }
}

export default Dashboard;