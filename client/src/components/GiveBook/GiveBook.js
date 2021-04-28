import React from 'react';
import MapClickable from '../MapClickable/MapClickable';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import CityClicker from '../CityClicker/CityClicker'

function GiveBook(props) {
const history = useHistory();
const { currentLng, currentLat, currentAdress } = useSelector((state) => state);
const { userName } = useSelector((state) => state);

function bookGiver(e) {
  e.preventDefault()
console.log(e.target.bookId.value);
  fetch('http://localhost:8080/books/give', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: e.target.bookId.value.trim(),
      adress: e.target.bookAdress.value,
      userName: userName,
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
            <input type="text" name='bookId' className="validate" placeholder="Ввести идентификатор книги"/>
          </div>
          <div className="">
            <div className="input-field col s12">
              <input name='bookAdress' type="text" className="validate" placeholder="Ввести адрес книги" value={currentAdress}/>
            </div>
          </div>
          <div className="">
            <div className="input-field col s12">
              <input id="book-lat" type="text" className="validate" placeholder='Широта' value={currentLat}/>
            </div>
          </div>

          <div className="">
            <div className="input-field col s12">
              <input id="book-long" type="text" className="validate" placeholder='Долгота' value={currentLng}/>
            </div>
          </div>
          <div className="">
            <h6>Выбери место на карте</h6>
          </div>
          <div className="center">
            <CityClicker />
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
