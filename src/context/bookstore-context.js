import React from 'react'

export default React.createContext({
    books:[],
    book: {},
    Cart:[],
    Admin: false,
    getBooks: ()=>{},
    getBook: (bookId)=>{},
    deleteBook:(bookId)=>{},
    updateBook:(bookId, book)=>{},
    addBook:(book)=>{},
    isAdmin:()=>{},
    notAdmin:()=>{},
    addToCart:(bookId)=>{},
    removeFromCart:(bookId)=>{},
    cartTotal:()=>{}
});