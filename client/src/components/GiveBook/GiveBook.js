import React from 'react';
import MapClickable from '../MapClickable/MapClickable';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

function GiveBook(props) {
const history = useHistory();
const { currentLng, currentLat } = useSelector((state) => state);

function bookGiver(e) {
  e.preventDefault()
console.log(e.target.bookId.value);
  fetch('http://localhost:8080/books/give', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: e.target.bookId.value,
      adress: e.target.bookAdress.value,
      latitude: currentLat,
      longitude: currentLng,
    }),
  })
    .then(response => response.json())
    .then(success => success && history.push(`/books/${e.target.bookId.value}`))  // или на главную?

}

  return (
    <div className="center">
      <div className="col s12 m7">
      <form onSubmit={bookGiver} className="card">
        <div className="card">
          <div className="card-content">
            <h5>Передай книгу дальше!</h5>
          </div>
          <div className="input-field col s12">
            <input type="text" name='bookId' className="validate" placeholder="Ввести номер книги"/>
          </div>
          <div className="">
            <div className="input-field col s12">
              <input name='bookAdress' type="text" className="validate" placeholder="Ввести адрес книги"/>
            </div>
          </div>
          <div className="">
            <div className="input-field col s12">
              <input id="book-lat" type="text" className="validate" value={currentLat}/>
              <label htmlFor="book-lat">Широта</label>
            </div>
          </div>

          <div className="">
            <div className="input-field col s12">
              <input id="book-long" type="text" className="validate" value={currentLng}/>
              <label htmlFor="book-long">Долгота</label>
            </div>
          </div>
          <div className="">
            <h6>Выбери место на карте</h6>
          </div>
          <div className="">
            <MapClickable />
          </div>
          <button className="waves-effect waves-light btn orange" style={{margin: '1rem'}}>
            Передать дальше</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default GiveBook;