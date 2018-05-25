import React from 'react';
import './product.css';

const Product = (props) => {
    console.log(props)
    // Display name price image from props
    return (

        <div className="container">
            {props.name}
            <br />
            {props.price}
            <br />
            {props.image}
        </div>

    )
}




export default Product;