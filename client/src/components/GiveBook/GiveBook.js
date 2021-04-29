import React from "react";
import { useRef } from "react";
import MapClickable from "../MapClickable/MapClickable";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CityClicker from "../CityClicker/CityClicker";

function GiveBook(props) {
  const history = useHistory();
  const placeDescription = useRef();
  const { currentLng, currentLat, currentAdress } = useSelector(
    (state) => state
  );
  const { userName } = useSelector((state) => state);

  async function bookGiver(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/books/give", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.bookId.value.trim(),
        adress: e.target.bookAdress.value,
        userName: userName,
        description: placeDescription.current.value,
        latitude: currentLat,
        longitude: currentLng,
      }),
    });
    if (response.status === 500) {
      alert("Неправильный идентификатор книги");
    } else {
      history.push(`/books/${e.target.bookId.value}`);
    }
  }

  return (
    <div className="center">
      <div className="col s12 m7">
        <form onSubmit={bookGiver} className="card">
          <div className="card">
            <div className="card-content">
              <h5>Передай книгу дальше!</h5>
            </div>
            <div class="row">
              <div class="col s6">
                <CityClicker />
                <div className="input-field col s12">
                  <input
                    type="text"
                    name="bookId"
                    className="validate"
                    placeholder="Ввести идентификатор книги"
                  />
                </div>
                <div className="input-field col s12">
                  <input
                    id="book-adress"
                    type="text"
                    className="validate"
                    placeholder="Описание места закладки"
                    ref={placeDescription}
                  />
                </div>
                <div className="">
                  <div className="input-field col s12">
                    <input
                      name="bookAdress"
                      type="text"
                      className="validate"
                      placeholder="Ввести адрес книги"
                      value={currentAdress}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="input-field col s12">
                    <input
                      id="book-lat"
                      type="text"
                      className="validate"
                      placeholder="Широта"
                      value={currentLat}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="input-field col s12">
                    <input
                      id="book-long"
                      type="text"
                      className="validate"
                      placeholder="Долгота"
                      value={currentLng}
                    />
                  </div>
                </div>
                <button
                  className="waves-effect waves-light btn orange"
                  style={{ margin: "1rem" }}
                >
                  Передать дальше
                </button>
              </div>
              <div class="col s6">
                <div className="">
                  <h6>Выбери место на карте</h6>
                </div>
                <div className="">
                  <MapClickable />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GiveBook;
