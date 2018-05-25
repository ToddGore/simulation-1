import React from 'react';


class Form extends React.Component {
    constructor() {
        super();

        this.state = {
            imageURL: "",
            productName: "",
            price: 0
        }




    }
    // state = {}
    render() {
        return (
            <div>
                <input value={this.state.imageURL} onChange={(e) => this.setState({ imageURL: e.target.value })} />
                <input value={this.state.productName} onChange={(e) => this.setState({ productName: e.target.value })} />
                <input value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                <button>Cancel</button>
                <button>Add to Invetory</button>
            </div>
        );
    }
}

export default Form;