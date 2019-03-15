import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/LandingPage/Login';
import Books from './components/BooksPage/Books';
import Book from './components/BookPage/Book';
import BookContext from './context/bookstore-context'


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

  }

  getBooks = () => {

  }

  deleteBook = (bookId) => {

  }

  updateBook = (book, bookId) => {

  }

  addBook = (book) => {
    console.log("book was added")
  }

  render() {
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
