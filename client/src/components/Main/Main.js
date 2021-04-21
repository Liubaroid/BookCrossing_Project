import React from 'react';

function Main(props) {
  return (
    <div className="center">
        <div className="col s12 m7">
                <h4>Приветственная информация</h4>
          <div className="card">
            <div className="card-content">
              <h6>Информация о сервисе</h6>
            </div>
            <div className="">
              <h3>Место для карты</h3>
            </div>
            <div className="card-action">
              <a href="">Поделиться книгой</a>
              <a href="">Взять книгу</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Main;
