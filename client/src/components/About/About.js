import React from "react";

function About(props) {
  return (
    <div>
      <div className="col s12 m7">
        <div className="card">
          <div className="card-content container">
            <h5
              className="blue-text center"
              style={{ padding: "1rem", margin: "1rem" }}
            >
              Как стать КнигоЗакладчиком?
            </h5>
            <div className="">
              <h5 className="left-align orange-text">Поделись книгой</h5>
              <h6>
                Введи необходимую информацию о книге и месте ее заложения,
                выбери точку на карте и впиши уникальный номер в книгу. И не
                забудь написать что книга участвует в Буккроссинге с помощью
                проекта КнигоЗакладчик.
              </h6>
              <h5 className="left-align orange-text">Возьми книгy</h5>
              <h6>
                Выбери книгу на карте, найди ее и бесплатно стань ее новым
                временным владельцем, указав ее уникальный номер.
              </h6>
              <h5 className="left-align orange-text">Передай книгу дальше</h5>
              <h6>
                Позволь книге путешествовать дальше выбрав для нее новый
                временный адрес.
              </h6>
              <h5 className="left-align orange-text">
                Следи за книгой и общайся
              </h5>
              <h6>
                На твоей странице ты найдешь список книг. Перейдя на одну из них
                ты сможешь отследить ее перемещения и пообщаться с теми кому она
                попадалась в руки.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <img
          src="http://localhost:3000/concept.jpg"
          alt="logo"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col s12 m7">
        {/* <h6 className="right-align" style={{ margin: '1rem' }} >Если вы любите ваши книги, позвольте им уйти.
      (с) The New York Times
    </h6> */}
        <div className="card center">
          {/* <h4 className="#e3f2fd blue lighten-5" style={{padding: '1rem', height: '5rem', margin: '1rem' }}>Как это работает</h4> */}
          <div className="card-content container">
            <h5
              className="orange-text"
              style={{ padding: "1rem", margin: "1rem" }}
            >
              Цель Буккроссинга
            </h5>
            <div className="">
              <h6 className="left-align">
                Книги не должны пылиться на полках! Они хотят путешествовать,
                дарить знания и радость любителям книг по всему миру. Вы можете
                помочь им в этом. Представьте… Вы оставили книгу в кафе,
                нашедший ее человек после прочтения оставил ее на вокзале, где
                ее нашел другой любитель книг, насладившись чтением в поездке
                оставил ее в своем городе, где ее может найти новый владелец… И
                так ваша книга попадает в удивительное приключение за которым вы
                можете наблюдать из дома. А также делиться впечатлениями и
                дискутировать на тему книги с теми кто ее нашел.
              </h6>
              <h6>Следите как и с кем путешествует ваша книга!</h6>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col s12 m7">
        <div className="card center">
          <div className="card-content container">
            <h5 className="blue-text" style={{ padding: '1rem', margin: '1rem' }}>О Буккроссинге</h5>
            <div className="">
              <h6 className="left-align">
             Идею Буккроссинга выдвинул в 2001 году специалист по интернет-технологиям Рон Хорнбэкер. 
             Это движение призвано объединить любителей книг по всему миру!
          </h6>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
