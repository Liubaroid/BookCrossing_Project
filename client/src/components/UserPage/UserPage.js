import React from 'react';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react'

function UserPage(props) {
 let [userBooks, setUserBooks] = useState()
  const userBookFetch = async() => {
    let response = await fetch('http://localhost:8080/book/:userName')
    let { userBooks } = await response.json();
    console.log(userBooks);
    setUserBooks(userBooks);
  }

  useEffect(()=>{
    userBookFetch()
  } ,[])

  return (
    <div>
      <div className='center'>
        <h4>Моя страница</h4>
        <h5>Обо мне</h5>
        <p>Информация пользователя</p>
      </div>
      <ul className="collection with-header">
        <li className="collection-header"><h4>Мои книги</h4></li>
        <li className="collection-item"><div>Книга 1<a href="" className="secondary-content">
          <Link to='/book'><i class="material-icons">send</i></Link></a></div></li>
        <li className="collection-item"><div>Книга 2<a href="" className="secondary-content">
          <Link to='/book'><i class="material-icons">send</i></Link></a></div></li>
      </ul>
    </div>
  );
}

export default UserPage;
