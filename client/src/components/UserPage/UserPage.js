import React from 'react';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react'
import { useSelector } from "react-redux";

function UserPage(props) {
const { userName } = useSelector((state) => state);
let [userBooks, setUserBooks] = useState()
const userBookFetch = async() => {
alert('!');
let response = await fetch(`http://localhost:8080/books/${userName}`)
let userBooks = await response.json();
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
  {/* <li className="collection-header"><h4>Мои книги</h4></li> */}
  <li> <a href="" className="secondary-content">
  <Link to='/book'>Книга<i class="material-icons">send</i></Link></a>
  </li> 
 {/* {userBooks.map(el => ( <li className="collection-item" key= {el.id}>{el.name}</li> ))} */}
  {/* <a href="" className="secondary-content">
  <Link to='/book'><i class="material-icons">send</i></Link></a>
  </li> */}
  
  </ul>
  </div>
  );
  }
  
  export default UserPage; 
