import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function BookPage(props) {
  let { id } = useParams();
  console.log("id book", id);
  let [book, setBook] = useState();
  const commentText = useRef();
  const { userName } = useSelector((state) => state);

  const setCommentHandler = async () => {
    const response = await fetch("http://localhost:8080/books/comment", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: userName,
        comment: commentText.current.value,
        bookId: id,
      }),
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/books/id/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((book) => setBook(book));
    console.log(book);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/books/id/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((book) => setBook(book));
    console.log(book);
  }, [book]);

  return (
    <div className="col s12 m7 container">
      <h4
        className="collection-item center orange-text"
        style={{ margin: "2rem" }}
      >
        {book?.name}
      </h4>
      <h5 className="collection-item center" style={{ margin: "1rem" }}>
        Автор: {book?.author}
      </h5>
      <h5 className="collection-item center">
        Уникальный идентификатор книги: {book?.id}
      </h5>
      <p className="center" style={{ margin: "2rem" }}>
        {book?.info}
      </p>
      {/* {book?.currentOwner ? <p className="center" style={{ margin: '2rem' }}>Текущий владелец: {book?.currentOwner}</p> : 
      <p className="center" style={{ margin: '2rem' }}>Книга свободна</p>} */}
      <ul class="collapsible">
        {book?.moovings.map((el) => (
          <div>
            {" "}
            <li>
              <div class="collapsible-header">
                <i class="material-icons">place</i>
                {el.adress};<span class="badge">{el.userName}</span>
              </div>
            </li>
          </div>
        ))}
      </ul>

      <h6 className="" style={{ margin: "2rem" }}>
        Комментарии:
      </h6>
      <ul className="collection ">
        {book &&
          book.comments.map((el) => (
            <div>
              <li className="collection-item avatar">
                <i className="material-icons circle blue">chat</i>
                <span className="title orange-text">{el.userName}</span>
                <p className="center ">{el.comments} </p>
              </li>
            </div>
          ))}
      </ul>

      <input
        type="text"
        className="center"
        placeholder="Ввести комментарий"
        ref={commentText}
      />
      <div className="center">
        <button
          className="waves-effect waves-light btn orange center"
          onClick={setCommentHandler}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

export default BookPage;
