import React from 'react';
import { useState, useEffect } from "react";

function AllBooks(props) {
  let [book, setBook] = useState()
  async function bookFromBack(params) {
    const responce = await fetch('http://localhost:8080/books');
    const { books } = await responce.json();
    console.log(books);
    setBook(books);
    
  }

  useEffect(() => {
    bookFromBack()
  }
    , [])

  return (

    <div>
      
    </div>
  );
}

export default AllBooks;
