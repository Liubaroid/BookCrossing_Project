import React from 'react';
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div className="center">
      <div className="col s12 m7">
        <h4>Приветственная информация</h4>
        <div className="card">
          <div className="card-content">
            <h6>Информация о сервисе</h6>
          </div>
          <div className="">
            <h3>Место для карты</h3>
          </div>
          <div className="card-action">
            <a><Link to='/share'>Поделиться книгой</Link></a>
            <a><Link to='/take'>Взять книгy</Link></a>
          </div>
        </div>
        <h5 className="">Найти книгу</h5>
        <input type="text" className="center" placeholder="Ввести номер книги" />
        <a className="waves-effect waves-light btn orange">
          <Link to='/book'>Найти книгy</Link></a>
        <hr />
      </div>
    </div>
  );
}

export default Main;
