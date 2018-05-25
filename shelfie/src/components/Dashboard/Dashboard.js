import React from 'react';
import Product from './../Product/Product';

class Dashboard extends React.Component {
    // state = {}

    render() {
        // console.log("test ", this.props.appState)

        let mapped = this.props.appState.map((x, i) => {
            return (
                <Product key={i + x.name} event={x} editEvent={this.editEvent} />
            )
        })


        // Bring in inventory through props
        // map over inventory



        return (
            <div>
                Dashboard
            </div>
        );
    }
}

export default Dashboard;