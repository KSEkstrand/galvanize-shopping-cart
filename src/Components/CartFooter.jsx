import React, { Component } from 'react';

class CartFooter extends Component {
    constructor(...props) {
        this.copyright = props.copyright;
    }

    render() {
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">{'#this.copyright'}</a>
        </nav>
    }    
}

export default CartFooter;