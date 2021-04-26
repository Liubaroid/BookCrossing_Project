import React from 'react';
import Test from '../Test/Test'
import { Link, useHistory } from "react-router-dom";

function Main(props) {
  const history = useHistory()
   function bookChecker(e) {
    e.preventDefault()
    let id = e.target.bookId.value
    console.log(id);
    fetch(`http://localhost:8080/books/take/${id}`)
      .then(response => response.json())
      .then(success => success && history.push(`/books/${e.target.bookId.value}`))  // или на главную?
  

    // history.push(`/books/${e.target.bookId.value}`)
  }



  return (
    <div className="center">
      <div className="col s12 m7">
        <h4>Приветственная информация</h4>
        <div className="card">
          <div className="card-content container">
            <div>
              <h6>
                Книги не должны пылиться на полках!
              </h6>
              <h6 className="left-align">
                Они хотят путешествовать, дарить знания и радость любителям книг по всему миру.  Вы можете помочь им в этом. Просто оставьте книгу в кафе, хостеле, аэропорту, на вокзале, в парке, где угодно! Или на одной из безопасных полок: ССЫЛКА
            </h6>
              <h6>
                Представьте…
            </h6>
              <h6 className="left-align">
                Вы оставили книгу в кафе, нашедший ее человек после прочтения оставил ее на вокзале, где ее нашел другой любитель книг, насладившись чтением в поездке оставил ее в своем городе, где ее может найти новый владелец… И так ваша книга попадает в удивительное приключение за которым вы можете наблюдать из дома. А также делиться впечатлениями и дискутировать на тему книги с теми кто ее нашел.
            </h6>
              <h6>
                Следите как и с кем путешествует ваша книга!
            </h6>
            </div>

            <div className="card-action" style={{ margin: '2rem' }}>
              <Link to='/share'>Поделиться книгой</Link>
              <Link to='/take'>Взять книгy</Link>
              <Link to='/give'>Передать дальше</Link>
            </div>
            <form onSubmit={bookChecker} className="card-action container center">
              <input type="text" name='bookId' className="center" placeholder="Ввести номер книги" />
              <div>
                <button className="waves-effect waves-light btn orange" style={{ margin: '1rem' }}>Найти книгy</button>
              </div>
            </form>
          </div>

          <div className="center">
            <Test />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;
