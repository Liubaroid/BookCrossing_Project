import React from "react";
import MapClickable from "../MapClickable/MapClickable";
import CityClicker from "../CityClicker/CityClicker";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ShareBook(props) {
  const history = useHistory();

  const adress = useRef();
  const bookName = useRef();
  const bookDescription = useRef();
  const bookAuthor = useRef();
  const placeDescription = useRef();

  const submitHandler = async () => {
    const addBookResponse = await fetch("http://localhost:8080/book", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        creator: userName,
        name: bookName.current.value,
        author: bookAuthor.current.value,
        info: bookDescription.current.value,
        description: placeDescription.current.value,
        adress: adress.current.value,
        latitude: currentLat,
        longitude: currentLng,
      }),
    });
    let book = await addBookResponse.json();
    history.push(`/books/${book.id}`);
  };
  const { currentLng, currentLat, userName, currentAdress } = useSelector(
    (state) => state
  );
  return (
    <div className="center">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-content">
            <h5>Поделись книгой!</h5>
          </div>
          <div className="">
            <div class="row">
              <div class="col s6">
                <CityClicker />
                <div className="input-field col s12">
                  <input
                    id="book-adress"
                    type="text"
                    className="validate"
                    placeholder="Адрес книги"
                    ref={adress}
                    value={currentAdress}
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

                <div className="input-field col s12">
                  <input
                    id="book-name"
                    type="text"
                    className="validate"
                    placeholder="Название книги"
                    ref={bookName}
                  />
                </div>

                <div className="input-field col s12">
                  <input
                    id="book-name"
                    type="text"
                    className="validate"
                    placeholder="Автор книги"
                    ref={bookAuthor}
                  />
                </div>

                <div className="input-field col s12">
                  <input
                    id="book-info"
                    type="text"
                    className="validate"
                    placeholder="Описание книги"
                    ref={bookDescription}
                  />
                </div>

                <div className="input-field col s12">
                  <input
                    id="book-info"
                    type="text"
                    className="validate"
                    placeholder="Широта"
                    value={currentLat}
                  />
                </div>

                <div className="input-field col s12">
                  <input
                    id="book-info"
                    type="text"
                    className="validate"
                    placeholder="Долгота"
                    value={currentLng}
                  />
                </div>
              </div>

              <div class="col s6">
                <div className="mar6p">Выбери место на карте</div>
                <br />
                <br />
                <div className="mar6p">
                  <MapClickable />
                  <br />
                  <button
                    className="waves-effect waves-light btn orange"
                    onClick={submitHandler}
                    style={{ margin: "1rem" }}
                  >
                    Поделиться
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareBook;
