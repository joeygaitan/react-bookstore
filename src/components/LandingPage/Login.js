import React, { Component } from 'react';
import '../../css/Login.css';
import { Link } from 'react-router-dom';
import bookStoreContext from '../../context/bookstore-context';

class Login extends Component {
    static contextType = bookStoreContext
    constructor(props) {
        super(props);
        this.state = {  }
    }

    ifClicked = () => {
        this.context.isAdmin()
    }

    clicked = () => {
        this.context.notAdmin()
    }

    render() {
        console.log(this.context)
    return (
            <div>
                <div className="container">
                    <div className="col-1">
                        <h1 >Admin</h1>
                        <Link to ='/books'><button className=" btn success" onClick={this.ifClicked}>Login</button></Link>
                    </div>
                    <div className="col-2">
                        <h1>Customer</h1>
                        <Link to ='/books'><button className=" btn success" onClick={this.clicked}>Login</button></Link>
                    </div>
                </div>
            </div>
            );
    }
}
 
export default Login;