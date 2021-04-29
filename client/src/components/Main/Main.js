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
      <div className="col s12 m7">
        <h6 className="right-align" style={{ margin: "1rem" }}>
          Если вы любите ваши книги, позвольте им уйти. (с) The New York Times
        </h6>
        <div className="card center">
          {/* <h4 className="#e3f2fd blue lighten-5" style={{padding: '1rem', height: '5rem', margin: '1rem' }}>Приветствие</h4> */}
          <div className="card-content container">
            <div class="container">
              <img
                src="http://localhost:3000/logo.png"
                alt="logo"
                style={{ width: "100%" }}
              />
            </div>

            <div className="card-action" style={{ margin: "1rem" }}>
              <Link to="/share">
                <a class="waves-effect waves-light btn-large blue">
                  <i class="large material-icons left">add_circle</i>
                  Поделиться книгой
                </a>
              </Link>
              <Link to="/take">
                <a class="waves-effect waves-light btn-large blue">
                  <i class="large material-icons left">class</i>
                  Взять книгу
                </a>
              </Link>
              <Link to="/give">
                <a class="waves-effect waves-light btn-large blue">
                  <i class="large material-icons left">exit_to_app</i>
                  Передать дальше
                </a>
              </Link>
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
