import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router';

function TakeBook() {
  let userName = useSelector((state => state))
  const history = useHistory()
  // console.log('textInput.current.value', textInput.current.focus());

  function bookTaker(e) {
    e.preventDefault()

    fetch('http://localhost:8080/books/take', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        currentOwner: userName,
        id: e.target.bookId.value,
      }),
    })
      .then(response => response.json())
      .then(success => success && history.push(`/books/${e.target.bookId.value}`))

  }

  // useEffect( () => {
  //   bookTaker()
  // }
  //   ,[])

  return (
    <div className="center">
      <div className="col s12 m7">
        <form onSubmit={bookTaker} className="card">
          <div className="card-content">
            <h5>Возьми книгу!</h5>
          </div>
          <input type="text" name='bookId' className="center" placeholder="Ввести номер книги" />
          <button
            className="waves-effect waves-light btn orange">Взять</button>
        </form>
      </div>
    </div>
  );
}

export default TakeBook;
