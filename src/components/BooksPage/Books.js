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
        return ( 
            <div>
                <Header context = {this.context}/>
                <div className="container">
                <dl>
                {this.context.Admin ? <h1>Admin</h1>: <h1>Customer</h1>}
                <br/>
                {this.context.Admin ? this.context.books.map(book=>{
                    return (<p className="list" onClick={()=>{this.context.getBook(book.id)}}><Link to={`/:${book.id}`}>Title: {book.title}</Link></p>)
                }): this.context.books.map((book, id)=>{
                    return (<Link to={`/:${book.id}`}><p className="list">Title: {book.title}, Author: {book.author}, Price: ${book.price} <button onClick={()=>{this.context.addToCart(book.id)}}>add to cart</button></p></Link>)
                })}
                </dl>
                <div className="emptySpace"/>
                </div>
            </div>
         );
    }
}
 
export default Books;