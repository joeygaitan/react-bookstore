import React, { Component } from 'react';
import '../../css/header.css';
import Cart from './Cart';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartClicked: false, 
            searchBarClicked: false,
        }
    }

    cartClicked = () =>{
        const { cartClicked } = this.state
        this.setState({ cartClicked: !cartClicked})
    }

    searchBarClicked = () => {
        const { searchBarClicked } = this.state
        this.setState({
            searchBarClicked: !searchBarClicked
        })
    }
    

    render() { 
        console.log(this.props.context.Cart);
        
        return (
            <div>
                <div className="topnav">
                    <Link to='/'><p className="active" onClick={this.props.notAdmin}>Back to Login</p></Link>
                    <p className="active" style={{marginLeft: "10px"}} onClick={this.cartClicked}>Cart ({this.props.context.Cart.length?this.props.context.Cart.length:0})</p>
                    {this.cartClicked ? <Cart context= {this.props.context}/>: null}
                    <input type="text" placeholder="Search.." onClick={this.searchBarClicked}/>
                    {this.searchBarClicked ? <SearchBar context ={this.props.context}/>: null}
                </div>
            </div>
        );
    }
}
 
export default Header;