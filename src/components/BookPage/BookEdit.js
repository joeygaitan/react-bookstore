import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/bookEdit.css'
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
        this.props.history.push('/books')
    }

    render() { 
        return ( 
        <div>
            <br/>
            <form className="Edit-Form" onSubmit={this.updatedSubmit}>
                        <div className="">
                            <label>Title</label>
                            <input name ="title" type="text" className="" value={this.state.title} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>SubTitle</label>
                            <input name ="subtitle" type="text" className="" value={this.state.subtitle} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>author</label>
                            <input name ="author" type="text" className="" value={this.state.subtitle} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>published</label>
                            <input name ="published" type="text" className="" value={this.state.published} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>publisher</label>
                            <input name ="publisher" type="text" className="" value={this.state.publisher} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>Page Count</label>
                            <input name ="pages" type="text" className="" value={this.state.pages} onChange={this.onUpdate}></input>
                        </div>
                        <div className="">
                            <label>Description</label>
                            <textarea name = "description" className="" rows="3" value={this.state.description} onChange={this.onUpdate}></textarea>
                        </div>
                        <div className="">
                            <label>Website</label>
                            <input name ="website" type="text" className="" value={this.state.website} onChange={this.onUpdate}></input>
                        </div>
                        <br/>
                        <button type="submit">Update Book</button>
                </form>
        </div> );
    }
}
 
export default withRouter(BookEdit);