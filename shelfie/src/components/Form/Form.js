import React from 'react';
import './form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: "",
            productName: "",
            price: 0
        }



    }



    clearForm() {
        this.setState({
            imageURL: "",
            productName: "",
            price: 0
        })
    }

    // state = {}
    render() {
        return (
            <div id="container">
                <input className="image-input" value={this.state.imageURL} onChange={(e) => this.setState({ imageURL: e.target.value })} />
                <input className="form-input" value={this.state.productName} onChange={(e) => this.setState({ productName: e.target.value })} />
                <input className="form-input" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                <button className="cancel-btn" onClick={() => this.clearForm()} > Cancel</button>
                <button className="add-btn">Add to Invetory</button>
            </div>
        );
    }
}

export default Form;