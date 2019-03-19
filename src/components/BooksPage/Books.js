import React, { Component } from 'react';
import bookstoreContext from '../../context/bookstore-context.js' 
import { Link } from 'react-router-dom';
import '../../css/books.css';
import Header from '../Header/Header';

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
                <Header context = {this.context}/>
                <dl>
                {this.context.Admin ? <h1>Admin</h1>: <h1>Customer</h1>}
                <br/>
                {this.context.Admin ? this.context.books.map((book, id)=>{
                    return (<Link to ={`/books/:${book.id}`}><dd>{book.title}</dd></Link>)
                }): this.context.books.map((book, id)=>{
                    return (<dd>{book.title}, {book.author}, ${book.price} <button onClick={()=>this.context.addToCart(book.id)}>add to cart</button></dd>)
                })}
                </dl>
            </div>
         );
    }
}
 
export default Books;