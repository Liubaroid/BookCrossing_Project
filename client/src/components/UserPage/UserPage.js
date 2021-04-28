import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function UserPage() {
  const { userName } = useSelector((state) => state);
  let [userBooks, setUserBooks] = useState();
  let [takenBooks, setTakenBooks] = useState();

  const userBookFetch = async () => {
    let response = await fetch(`http://localhost:8080/books/${userName}`);
    let { userBooks, takenBooks } = await response.json();
    // console.log(userBooks[0].id);
    setUserBooks(userBooks);
    setTakenBooks(takenBooks);
  };

  useEffect(() => {
    userBookFetch();
  }, []);

  return (
    <div>
      <div className="center">
        <h4 className="orange-text" style={{ margin: '2rem' }}>Привет, {userName} !</h4>
      </div>
      <ul className="collection with-header">
        <h5 className="collection-header">Твои книги:</h5>
        {userBooks &&
          userBooks.map((el) => (
            <li className="collection-item" key={el.id}>
              {el.name}
              <a href="" className="secondary-content">
                <Link to={`/books/${el.id}`}>
                  <i class="material-icons">send</i>
                </Link>
              </a>
            </li>
          ))}
      </ul>

      <ul className="collection with-header">
        <h5 className="collection-header">Взятые книги:</h5>
        {takenBooks &&
          takenBooks.map((el) => (
            <li className="collection-item" key={el.id}>
              {el.name}
              <a href="" className="secondary-content">
                <Link to={`/books/${el.id}`}>
                  <i class="material-icons">send</i>
                </Link>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UserPage;
