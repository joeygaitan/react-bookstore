import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/LandingPage/Login';
import Books from './components/BooksPage/Books';
import Book from './components/BookPage/Book';
import BookContext from './context/bookstore-context'
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state={
      books:[],
      Cart:[],
      Admin: false
    }
  }
  
  componentDidMount = () => {
    this.getBooks();
  }

  isAdmin = () => {
    const { admin } = this.state;

    this.setState({
      Admin: !admin
    })
  }

  getBooks = () => {
    axios.get(`http://localhost:8082/api/books`)
    .then(data => {
      this.setState({
        books: [...data.data]
      })
    })
    .catch(error=>{
      console.log(error)
      return null
    })
  }

  deleteBook = (bookId) => {
    console.log("deleted Book", bookId)
  }

  updateBook = (book, bookId) => {
    console.log("book was udpated", book, bookId);
  }

  addBook = (book) => {
    console.log("book was added", book)
  }

  render() {
    console.log(this.state.books);
    return (
      <BookContext.Provider value={{
        books: this.state.books,
        Cart: this.state.Cart,
        Admin: this.state.Admin,
        deleteBook: this.deleteBook,
        updateBook: this.updateBook,
        addBook: this.addBook,
        getBooks: this.getBooks
        }}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path = '/' component={Login}/>
            <Route path = '/books' component={Books}/>
            <Route path = '/books/:id' component={Book}/>
          </Switch>
        </div>
      </BrowserRouter>
      </BookContext.Provider>
    );
  }
}

export default App;
