import React, { Component } from 'react';
import '../../css/header.css';
import Cart from './Cart';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cartClicked: false, 
            searchBarClicked: false,
            search: ''
        }
    }
    cartClicked = () =>{
        const { cartClicked } = this.state
        this.setState({ cartClicked: !cartClicked})
    }

    searchBarClicked = () => {
        console.log("in here")
        const { searchBarClicked } = this.state
        this.setState({
            searchBarClicked: !searchBarClicked
        })
    }

    updateSearch = (event) => {
        this.setState({
            search: event.target.value.substr(0,20)
        })
    }

    render() { 
        console.log(this.state.search, this.state.cartClicked)
        let filteredBooksTitleAuthor = this.props.context.books.filter((book)=>{
            return (book.title.toLowerCase().indexOf(this.state.search) !== -1 || book.author.toLowerCase().indexOf(this.state.search) !== -1);
        })
        console.log(filteredBooksTitleAuthor)
        
        return (
            <div>
                <div className="topnav">
                    <Link to='/'><p className="active" onClick={this.props.notAdmin}>Back to Login</p></Link>

                    {this.props.context.Admin?null:<p className="active" style={{marginLeft: "10px"}} onClick={this.cartClicked}>Cart ({this.props.context.Cart.length?this.props.context.Cart.length:0})</p>}

                    {this.props.context.Admin? <Link to ='/AddBook'><p className="active" style={{marginLeft: "10px"}}>Add Book</p></Link>:null}

                    <input type="text" placeholder="Search.." value={this.state.search}  onChange={this.updateSearch}/>
                </div>
                {this.state.cartClicked ? <Cart context= {this.props.context}/>: null}
                {this.state.search !== '' ?
                <div className='searchBar'>
                    <dt>
                        {filteredBooksTitleAuthor.map((book)=>{
                            return <Link to={`/:${book.id}`}><dd className="theList">{book.author}, {book.title}</dd></Link>
                        })}
                    </dt>
                </div> :null
                }
            </div>
        );
    }
}
 
export default Header;