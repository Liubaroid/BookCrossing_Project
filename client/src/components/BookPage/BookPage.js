import React from 'react';

function BookPage(props) {
  return (

    <div className="col s12 m7 center">
      <h5 className="">Название книги</h5>
      <p className="">Описание книги</p>
      <h5 className="">Комментарии:</h5>
      <p>контейнер для комментов???</p>
      <hr />
      <input type="text" className="center" placeholder="Ввести комментарий" />
      <a className="waves-effect waves-light btn orange">Добавить</a>
      <hr />
    </div>
  );
}

export default BookPage;
