import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bookstoreContext from '../../context/bookstore-context.js' 
class AddBook extends Component {
    static contextType = bookstoreContext
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

        this.context.addBook(this.state)
    }

    render() {
        return ( 
            <div>
                <br/>
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
                            <label>published</label>
                            <input name ="published" type="text" className="form-control" value={this.state.published} onChange={this.onUpdate}></input>
                        </div>
                        <div className="form-group">
                            <label>publisher</label>
                            <input name ="publisher" type="text" className="form-control" value={this.state.publisher} onChange={this.onUpdate}></input>
                        </div>
                        <div className="form-group">
                            <label>Page Count</label>
                            <input name ="pages" type="text" className="form-control" value={this.state.pages} onChange={this.onUpdate}></input>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea name = "description" className="form-control" rows="3" value={this.state.description} onChange={this.onUpdate}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Website</label>
                            <input name ="website" type="text" className="form-control" value={this.state.website} onChange={this.onUpdate}></input>
                        </div>
                        <br/>
                        <button type="submit">Add Book</button>
                </form>
                <br/>
                <Link to= '/books'><button>Cancel</button></Link>
            </div>
         );
    }
}
 
export default AddBook;