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
          <li><Link to='/login'>Войти</Link></li>
          <li><Link to='/registration'>Регистрация</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
