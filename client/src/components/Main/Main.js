import React from 'react';
import Test from '../Test/Test'
function Main(props) {
 
  return (
    <div className="center">
        <div className="col s12 m7">
                <h4>Приветственная информация</h4>
          <div className="card">
            <div className="card-content">
              <h6>Информация о сервисе</h6>
            </div>
            <div className="center">
              <Test/>
            </div>
            <div className="card-action">
              <a href="/share">Поделиться книгой</a>
              <a href="/take">Взять книгу</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Main;
