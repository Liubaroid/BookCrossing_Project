import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo left">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/login'>Войти</Link></li>
          <li><Link to='/registration'>Регистрация</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
