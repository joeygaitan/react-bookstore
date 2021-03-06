import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/LandingPage/Login';
import Books from './components/BooksPage/Books';
import Book from './components/BookPage/Book';
import BookContext from './context/bookstore-context';
import AddBook from './components/BookPage/AddBook'
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state={
      books:[],
      book: {},
      Cart:[],
      Admin: false
    }
  }
  
  componentDidMount = () => {
    this.getBooks();
    this.getBook();
  }

  isAdmin = () => {
    this.setState({
      Admin: true
    })
  }

  notAdmin = () => {
    this.setState({
      Admin: false
    })
  }

  getBooks = async () => {
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

  getBook = async (bookId) => {
    axios.get(`http://localhost:8082/api/books/${bookId}`)
    .then(data => {
      console.log(data)
      this.setState({
        book: {...data.data}
      })
    })
    .catch(error=>{
      console.log(error)
      return null
    })
  }

  deleteBook = async (bookId) => {
    axios.delete(`http://localhost:8082/api/books/${bookId}`)
    .then(data=>{
      this.getBooks();
    })
    .catch(error=>{
      console.log(error);
      return null      
    })
  }

  updateBook = async (book, bookId) => {
    console.log("book was udpated", book, bookId);
    axios.put(`http://localhost:8082/api/books/${bookId}`, book)
    .then(data=>{
      this.getBooks()
    })
    .catch(error=>{
      console.log(error)
      return null
    })
  }

  addBook = async (book) => {
    console.log(book)
    axios.post('http://localhost:8082/api/books', book)
    .then(data =>{
      this.getBooks()
    })
    .catch(error=>{
      console.log(error);
      return null
    })
  }

  addToCart = async (bookId) => {
    let book = this.state.books.find(book=>{ return bookId === book.id})
    axios.patch(`http://localhost:8082/api/books/cart/add/${bookId}`)
    .then(data=>{
      this.setState({
        Cart: [...this.state.Cart, data.data]
      })
    })
    .catch(error=>{
      console.log(error);
      return null
    })
  }

  removeFromCart = async (bookId) => {
    let book = this.state.books.find(book=>{ return bookId === book.id})
    axios.patch(`http://localhost:8082/api/books/cart/remove/${bookId}`)
    .then(data=>{
      let newCart = this.state.Cart.filter(cart=>{return book.id !== cart.id})
      this.setState({Cart: [...newCart]})
    })
    .catch(error=>{
      console.log(error);
      return null
    })
  }

  render() {
    return (
      <BookContext.Provider value={{
        books: this.state.books,
        book: this.state.book,
        Cart: this.state.Cart,
        Admin: this.state.Admin,
        deleteBook: this.deleteBook,
        updateBook: this.updateBook,
        addBook: this.addBook,
        getBook: this.getBook,
        getBooks: this.getBooks,
        isAdmin: this.isAdmin,
        notAdmin: this.notAdmin,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart
        }}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path = '/' component={Login}/>
            <Route path = '/books' component={Books}/>
            <Route exact path = '/AddBook' component={AddBook}/>
            <Route path = '/:id' component={Book}/>
          </Switch>
        </div>
      </BrowserRouter>
      </BookContext.Provider>
    );
  }
}

export default App;
