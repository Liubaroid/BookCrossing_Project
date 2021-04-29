import React from "react";
import Test from "../Test/Test";
import CityClicker from "../CityClicker/CityClicker";
import { Link, useHistory } from "react-router-dom";

function Main(props) {
  const history = useHistory();
  async function bookChecker(e) {
    e.preventDefault();
    let id = e.target.bookId.value.trim();
    const response = await fetch(`http://localhost:8080/books/take/${id}`);
    if (response.status === 500) {
      alert("Книги с таким кодом нет");
      return;
    }
    history.push(`/books/${e.target.bookId.value}`);
  }

  return (
    <div className="">
      <h6 className="right-align" style={{ margin: "1rem" }}>
        Если вы любите ваши книги, позвольте им уйти. (с) The New York Times
      </h6>
      <div className="card center">
        {/* <h4 className="#e3f2fd blue lighten-5" style={{padding: '1rem', height: '5rem', margin: '1rem' }}>Приветствие</h4> */}

        <div class="row">
          <div class="col s6">
            <div className="card-action" style={{ margin: "1rem" }}>
              <div className="center">
                <CityClicker />
              </div>
              <br />
              <br />
              <Link to="/share">Поделиться книгой</Link>
              <br />
              <br />
              <Link to="/take">Взять книгy</Link>
              <br />
              <br />
              <Link to="/give">Передать дальше</Link>
              <br />
              <br />
            </div>
            <form
              onSubmit={bookChecker}
              className="card-action container center"
            >
              <input
                type="text"
                name="bookId"
                className="center"
                placeholder="Ввести идентификатор книги"
              />
              <div>
                <button
                  className="waves-effect waves-light btn orange"
                  style={{ margin: "1rem" }}
                >
                  Найти книгy
                </button>
              </div>
            </form>
          </div>
          <div class="col s6">
            <br />

            <Test />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
