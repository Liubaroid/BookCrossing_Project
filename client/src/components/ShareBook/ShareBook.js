import React from 'react';

function ShareBook(props) {
  return (
    <div className="center">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-content">
              <h6>Текст с информацией для пользователя</h6>
            </div>
            <div className="">
              <h3>Место для карты</h3>
            </div>
            <div className="row">
        <div className="input-field col s12">
          <input id="book" type="text" className="validate"/>
          <label for="book">Название книги</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="book-info" type="text" className="validate"/>
          <label for="book-info">Описание книги</label>
        </div>
      </div>
      <a class="waves-effect waves-light btn">Поделиться</a>
          </div>
        </div>
      </div>
  );
}

export default ShareBook;
