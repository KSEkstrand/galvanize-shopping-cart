import React from 'react'
import { Component } from 'react';
import PropTypes from 'prop-types';

class AddItem extends Component {

    constructor(props) {
        super(props)
        this.addItemToCart = props.addItemToCart;
        this.products = props.products;
        this.state = {
            selectedProduct: props.products[0],
            selectedProductQuantity: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="container" onSubmit={(e) => e.preventDefault()} >
                <h3>Quantity</h3>
                <input type="text" onChange={(e) => this.setState({ selectedProductQuantity: e.target.value }) }></input>

                <h3>Products</h3>
                <select style={{ display: 'block' }}>
                    {this.getSelectValues()}
                </select>

                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        )
    }


    getSelectValues = (products) => {
        return this.products.map((product, index) => (
            <option value={product} key={index} onChange={(e) => this.setState({ selectedProduct: e.value }) }>
                {product.name}
            </ option>
        ))
    }

    handleSubmit = (e) => {
        this.addItemToCart(this.state.selectedProduct, parseInt(this.state.selectedProductQuantity));
    }
}

AddItem.propTypes = {
    addItemToCart: PropTypes.func
}

export default AddItem;