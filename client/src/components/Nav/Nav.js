import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav(props) {
  const { isLogin } = useSelector((state) => state);
  return (
    <nav>
      <div className="nav-wrapper blue">
        <a href="#" className="brand-logo left">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {(isLogin) ? <li><Link to='/'>Главная</Link></li> : null}
          {(isLogin) ? <li><Link to='/user'>Моя страница</Link></li> : null}
          {(!isLogin) ? <li><Link to='/login'>Войти</Link></li> : null}
          {(!isLogin) ? <li><Link to='/registration'>Регистрация</Link></li>: null}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
