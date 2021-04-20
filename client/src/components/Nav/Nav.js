import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><Link to='/login'>Войти</Link></li>
          <li><Link to='/registration'>Регистрация</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
