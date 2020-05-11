import React, { Component } from 'react';
import CartItem from './CartItem'

class CartItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: props.cartItems
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            cartItems:  nextProps.cartItems 
        })

        console.log(nextProps.cartItems)
    }

    render() {
        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                        {getCartItems(this.state.cartItems)}
                    </div>
                </div>
                <label>Total Price: {getTotalPrice(this.state.cartItems)}</label>
            </div>
        )
    }


}

const getCartItems = (items) => {
    return items.map((item, index) => (
        <CartItem itemDetails={item} key={index}></CartItem>
    ))
}

const getTotalPrice = (cartItems) => {
    let total = 0
    cartItems.forEach((cartItem) => total += cartItem.product.priceInCents)
    return total
}

export default CartItems