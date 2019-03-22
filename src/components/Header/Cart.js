import React, { Component } from 'react';
import '../../css/cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    render() {
        return ( 
            <div className="cart">
                <dt>
                    {this.props.context.Cart.map((item)=>{
                        return (<dd className>Book: {item.subtitle}, price: ${item.price}<button onClick={()=>this.props.context.removeFromCart(item.id)}>Remove From Cart</button></dd>)
                    })}
                </dt>
                <h1>Total ${this.props.context.Cart.reduce((acc, object)=>{return acc + Number(object.price)},0)}</h1>
            </div>
         );
    }
}
 
export default Cart;