import React, { Component } from 'react';
import '../../css/cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    total=()=>{
        let sum = this.props.context.Cart.reducer((acc, object)=>{
            return acc + Number(object.price)
        }).toFixed(2)
        console.log(sum)
        return sum
    }

    render() { 
        console.log(this.props.context)
        console.log(this.props.context.Cart.reduce((accumilator, object)=>{
            console.log(object.price, accumilator.price)
            return Number(accumilator.price) + Number(object.price)
            }))
        return ( 
            <div className="cart">
                <dt>
                    {this.props.context.Cart.map((item)=>{
                        return (<dd className>Book: {item.subtitle}, price: ${item.price}<button onClick={()=>this.props.context.removeFromCart(item.id)}>Remove From Cart</button></dd>)
                    })}
                </dt>
                <h1>Total ${this.props.context.Cart.reduce((acc = 0, object)=>{
                    return acc + Number(object.price)
                    })}
                 </h1>
            </div>
         );
    }
}
 
export default Cart;