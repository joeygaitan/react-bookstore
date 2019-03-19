import React from 'react'

export default React.createContext({
    Books:[],
    Cart:[],
    Admin: false,
    getBooks: ()=>{},
    deleteBook:(bookId)=>{},
    updateBook:(book, bookId)=>{},
    addBook:(book)=>{},
    isAdmin:()=>{},
    notAdmin:()=>{},
    addToCart:()=>{}
});