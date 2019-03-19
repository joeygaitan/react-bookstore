import React, { Component } from 'react';
import bookstoreContext from '../../context/bookstore-context.js';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';


class Book extends Component {
    static contextType = bookstoreContext
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.context.book)
        return ( 
            <div>
                <Header context = {this.context} />
                <Link to='/books'><button>go Back to Books</button></Link>
                
            </div>
         );
    }
}
 
export default Book;