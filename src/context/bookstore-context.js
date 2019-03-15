import React from 'react'

export default React.useContext({
    Books:[],
    Cart:[],
    Admin: false,
    getBooks: ()=>{},
    deleteBook:(bookId)=>{},
    updateBook:(book, bookId)=>{},
    addBook:(book)=>{}
});