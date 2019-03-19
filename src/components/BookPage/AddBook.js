import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Link to= '/books'><button>Cancel</button></Link>
            </div>
         );
    }
}
 
export default AddBook;