import React, { Component } from 'react';

class BookEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"",
            subtitle:"",
            author:"",
            published:"",
            publisher:"",
            pages:"",
            description:"",
            website:"",
            inCart: false
         }
    }

    onUpdate = (event) =>{
        this.setState({
           [event.target.name] : event.target.value
        })
    }
    
    updatedSubmit = (event) => {
        event.preventDefault();

        this.props.context.updateBook(this.props.context.book.id, this.state)
    }

    render() { 
        return ( 
        <div>
            <form id="post-form" onSubmit={this.updatedSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input name ="title" type="text" className="form-control" value={this.state.title} onChange={this.onUpdate}></input>
                        </div>
                        <div className="form-group">
                            <label>SubTitle</label>
                            <input name ="subtitle" type="text" className="form-control" value={this.state.subtitle} onChange={this.onUpdate}></input>
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input name ="author" type="text" className="form-control" value={this.state.subtitle} onChange={this.onUpdate}></input>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea name = "description" className="form-control" rows="3" value={this.state.description} onChange={this.onUpdate}></textarea>
                        </div>
                        <button type="submit">Update Book</button>
                </form>
        </div> );
    }
}
 
export default BookEdit;