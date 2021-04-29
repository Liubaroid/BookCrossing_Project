import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

function TakeBook(params) {
  let userName = useSelector((state) => state);
  const history = useHistory();
  // console.log('textInput.current.value', textInput.current.focus());

  async function bookTaker(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/books/take", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentOwner: userName,
        id: e.target.bookId.value.trim(),
      }),
    });
    if (response.status === 500) {
      alert("Heт такой книги");
    } else {
      history.push(`/books/${e.target.bookId.value}`);
    }
  }

  // useEffect( () => {
  //   bookTaker()
  // }
  //   ,[])

  return (
    <div className="center container">
      <div className="col s12 m7">
        <form onSubmit={bookTaker} className="card">
          <div className="card-content">
            <h5>Возьми книгу!</h5>
          </div>
          <input
            type="text"
            name="bookId"
            className="center"
            placeholder="Ввести идентификатор книги"
          />
          <button
            className="waves-effect waves-light btn orange"
            style={{ margin: "1rem" }}
          >
            Взять
          </button>
        </form>
      </div>
    </div>
  );
}

export default TakeBook;
