import React from 'react';

function Nav(props) {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo right">Logo</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="">Личный кабинет</a></li>
          <li><a href="">Войти</a></li>
          <li><a href="">Регистрация</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
