import React, { Component } from 'react'

class CartItem extends Component {

    constructor(props) {
        super(props)
        this.itemDetails = props.itemDetails
    }
    render() {
        return (
            <div className="collection-item">
                <div className="row">
                    <div className="col-md-8">{this.itemDetails.product.name}</div>
                    <div className="col-md-2">{this.itemDetails.product.priceInCents}</div>
                    <div className="col-md-2">{this.itemDetails.quantity}</div>
                </div>
            </div>
            )
    }
}

export default CartItem;