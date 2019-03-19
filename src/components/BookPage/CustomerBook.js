import React, { Component } from 'react';
import '../../css/customerBook.css';

class CustomerBook extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.context.book)
        return ( 
        <div className="contain">
            <h1>Title: {this.props.context.book.title}</h1>
            <h3>Author: {this.props.context.book.author}</h3>
            <h4>Publisher: {this.props.context.book.publisher}</h4>
            <h4>Page Count: {this.props.context.book.pages}</h4>
            <a href={`${this.props.context.book.website}`}>website</a>
            <h4>{this.props.context.book.description}</h4>
            <br/>
            <br/>
        </div> );
    }
}
 
export default CustomerBook;