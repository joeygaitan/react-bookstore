import React, { Component } from 'react';
import BookEdit from './BookEdit';
import {Link} from 'react-router-dom';

class AdminBook extends Component {
    constructor(props) {
        super(props);
        this.state = { value: false }
    }

    clicked = () => {
        const { value } = this.state;

        this.setState({ value: !value})
        
    }

    deleted = () => {
        this.props.context.deleteBook(this.props.context.book.id)
    }

    render() { 
        return ( 
        <div className="contain">
            <h1>Title: {this.props.context.book.title}</h1>
            <h3>Author: {this.props.context.book.author}</h3>
            <h4>Publisher: {this.props.context.book.publisher}</h4>
            <a href={`${this.props.context.book.website}`}>website</a>
            <h4>{this.props.context.book.description}</h4>
            <br/>
            <Link to = '/books'><button onClick={this.deleted} style={{marginBottom: "5px;"}}>Delete Book</button></Link>

            <button onClick={this.clicked}>Edit Book</button>
            {this.state.value?<BookEdit context={this.context}/> : null}
        </div> );
    }
}
 
export default AdminBook;