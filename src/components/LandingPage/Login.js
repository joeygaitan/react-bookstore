import React, { Component } from 'react';
import '../../css/Login.css';
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="col-1">
                        <h2>Admin</h2>
                        <Link to = '/books'><button className=" btn success">Login</button></Link>
                    </div>
                    <div className="col-2">
                        <h1>Customer</h1>
                        <Link to = '/books'><button className=" btn success">Login</button></Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;