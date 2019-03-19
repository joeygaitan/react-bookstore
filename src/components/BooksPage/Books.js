import React, { Component } from 'react';
import bookstoreContext from '../../context/bookstore-context.js' 
import { Link } from 'react-router-dom';
import '../../css/books.css';
import Header from '../Header';

class Books extends Component {
    static contextType = bookstoreContext
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        console.log(this.context.Admin, this.context.books)
        return ( 
            <div>
                <Header bookSearchInfo = {this.context.Books}/>
                <ul>
                {this.context.Admin ? <h1>Admin</h1>: <h1>Customer</h1>}
                <br/>
                {this.context.Admin ? this.context.books.map((book, id)=>{
                    return <Link to ={`/books/:${book.id}`}><li>{book.title}</li></Link>
                }): this.context.books.map((book, id)=>{
                    return <li>{book.title}, {book.author}</li>
                })}
                </ul>
            </div>
         );
    }
}
 
export default Books;