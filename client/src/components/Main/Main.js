import React from 'react';
import Test from '../Test/Test'
import CityClicker from '../CityClicker/CityClicker'
import { Link, useHistory } from "react-router-dom";

function Main(props) {
  const history = useHistory()
  async function bookChecker(e) {
    e.preventDefault()
    let id = e.target.bookId.value.trim()
   const response = await fetch(`http://localhost:8080/books/take/${id}`);
      if (response.status === 500) {
        alert('Книги с таким кодом нет');
        return
      }
      history.push(`/books/${e.target.bookId.value}`);
  }

  return (
    <div className="">
      <div className="col s12 m7">
        <h6 className="right-align" style={{ margin: '1rem' }} >Если вы любите ваши книги, позвольте им уйти.
        (с) The New York Times
      </h6>
        <div className="card center">
          {/* <h4 className="#e3f2fd blue lighten-5" style={{padding: '1rem', height: '5rem', margin: '1rem' }}>Приветствие</h4> */}
          <div className="card-content container">

            <div className="">
              <h6 className="left-align">
                Книги не должны пылиться на полках! Они хотят путешествовать, дарить знания и радость любителям книг по всему миру.  Вы можете помочь им в этом. Просто оставьте книгу в кафе, хостеле, аэропорту, на вокзале, в парке, где угодно! Или на одной из безопасных полок: ССЫЛКА
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
            <div className="card-action" style={{ margin: '1rem' }}>
              <Link to='/share'>Поделиться книгой</Link>
              <Link to='/take'>Взять книгy</Link>
              <Link to='/give'>Передать дальше</Link>
            </div>
            <form onSubmit={bookChecker} className="card-action container center">
              <input type="text" name='bookId' className="center" placeholder="Ввести идентификатор книги" />
              <div>
                <button className="waves-effect waves-light btn orange" style={{ margin: '1rem' }}>Найти книгy</button>
              </div>
            </form>
          </div>

          <div className="center">
            <CityClicker />
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
