import React, { Component } from 'react';
import bookstoreContext from '../../context/bookstore-context.js';


class Book extends Component {
    static contextType = bookstoreContext
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default Book;