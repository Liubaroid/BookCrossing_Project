import React from 'react';
import { Link } from "react-router-dom";

function UserPage(props) {
  return (
    <div>
      <div className='center'>
        <h4>Моя страница</h4>
        <h5>Обо мне</h5>
        <p>Информация пользователя</p>
      </div>
      <ul class="collection with-header">
        <li class="collection-header"><h4>Мои книги</h4></li>
        <li class="collection-item"><div>Книга 1<a href="" class="secondary-content">
          <Link to='/book'><i class="material-icons">send</i></Link></a></div></li>
        <li class="collection-item"><div>Книга 2<a href="" class="secondary-content">
          <Link to='/book'><i class="material-icons">send</i></Link></a></div></li>
      </ul>
    </div>
  );
}

export default UserPage;
