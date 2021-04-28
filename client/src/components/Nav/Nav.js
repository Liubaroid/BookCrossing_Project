import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav(props) {
  const { isLogin } = useSelector((state) => state);
  return (
    <div className="navbar-fixed">
    <nav className='blue'>
      <div className="nav-wrapper blue container">
        <a href="#" className="brand-logo left hide-on-med-and-down">КнигоЗакладчик</a>
        <ul id="nav-mobile" className="right">
          {(isLogin) ? <li><Link to='/'>Главная</Link></li> : null}
          {(isLogin) ? <li><Link to='/user'>Моя страница</Link></li> : null}
          {(!isLogin) ? <li><Link to='/login'>Войти</Link></li> : null}
          {(!isLogin) ? <li><Link to='/registration'>Регистрация</Link></li> : null}
          <li><Link to='/login'>Выход</Link></li>
          {/* <a href="#" data-activetes="mobile-demo" className="button-collapse">
                 <i className="material-icons">menu</i>     
          </a> */}
            {/* <ul class="sidenav" id="mobile-demo">
            {(isLogin) ? <li><Link to='/'>Главная</Link></li> : null}
          {(isLogin) ? <li><Link to='/user'>Моя страница</Link></li> : null}
            </ul>  */}
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
