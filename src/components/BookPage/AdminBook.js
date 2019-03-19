import React, { Component } from 'react';
import BookEdit from './BookEdit';


class AdminBook extends Component {
    constructor(props) {
        super(props);
        this.state = { value: false }
    }

    clicked = () => {
        const { value } = this.state;

        this.setState({ value: !value})
        console.log("clicked", this.state.value)
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
            <button onClick={()=>this.props.context.deleteBook(this.props.context.book.id)} style={{marginBottom: "5px;"}}>Delete Book</button>

            <button onClick={this.clicked}>Edit Book</button>
            {this.state.value?<BookEdit context={this.context}/> : null}
        </div> );
    }
}
 
export default AdminBook;