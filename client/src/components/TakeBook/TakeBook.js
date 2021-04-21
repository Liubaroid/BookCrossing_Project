import React from 'react';

function TakeBook(props) {
  return (
    <div className="center">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-content">
            <h6>Текст с информацией для пользователя</h6>
          </div>
          <input type="text" className="center" placeholder="Ввести номер книги" />
          <a className="waves-effect waves-light btn orange">Взять</a>
        </div>
      </div>
    </div>
  );
}

export default TakeBook;
