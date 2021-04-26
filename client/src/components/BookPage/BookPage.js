import React from 'react';
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useParams } from 'react-router';

function BookPage(props) {
  let { id } = useParams()
  console.log('id book', id);
  let [book, setBook] = useState()
  // const bookFetch = async () => {
  //   // let response = await fetch(`http://localhost:8080/books/${id}`)
  //   let response = await fetch(`http://localhost:8080/books/${id}`)
  //   let books = await response.json();
  //   console.log('books',  books);
  //   setBooks();
  // }

  useEffect(() => {
    fetch(`http://localhost:8080/books/id/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(book => setBook(book))
    console.log(book);
  }, [])

  return (
    <div className="col s12 m7 container">
      <h5 className="collection-item center">{book?.name}</h5>
      <h5 className="collection-item center">Уникальный номер книги: {book?._id}</h5>
      <p className="center">{book?.info}</p>
      <h6 className="">Комментарии:</h6>
      <ul className="collection ">
        <li className="collection-item avatar">
        <i className="material-icons circle blue">chat</i>
          <span className="title">
            {/* {Date().slice(3,25)} */}
          User Name:</span>
          <p className="center">Place for comments </p>
        </li>
      </ul>

      <input type="text" className="center" placeholder="Ввести комментарий" />
      <div className='center'>
        <button className="waves-effect waves-light btn orange center" style={{margin: '2rem'}}>Добавить</button>
      </div>
    </div>
  )
}

export default BookPage;
