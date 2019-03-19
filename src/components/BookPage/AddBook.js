import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddBook extends Component {
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

        this.props.context.AddBook(this.state)
    }

    render() { 
        return ( 
            <div>
                <br/>
                <Link to= '/books'><button>Cancel</button></Link>
            </div>
         );
    }
}
 
export default AddBook;