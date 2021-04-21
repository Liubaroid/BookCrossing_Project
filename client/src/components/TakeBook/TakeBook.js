import React from 'react';

function TakeBook(props) {
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
          <a class="waves-effect waves-light btn">Взять</a>
        </div>
      </div>
    </div>
  );
}

export default TakeBook;
