import React from 'react';
import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Registration(props) {
const history = useHistory();
const dispatch = useDispatch();
const loginHandler = async () => {

  const uname = name.current.value;
  const upass = pass.current.value; 

  const response = await fetch('http://localhost:8080/users/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login: uname,
      password: upass,
    }),
  });

  const { login, id } = await response.json();
  if (login) {
   dispatch({type: 'LOGIN', payload: login}); 
   history.push('/');
  }
}

const name = useRef();
const pass = useRef();

  return (
    <div className="row">
    <form className="col s12 center">
    <h4>Войти</h4>
    <div className="row">
        <div className="input-field col s12">
          <input ref={name} id="last_name" type="text" className="validate"/>
          <label for="last_name">Имя</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input ref={pass} id="password" type="password" className="validate"/>
          <label for="password">Пароль</label>
        </div>
      </div>
      <a onClick={loginHandler} class="waves-effect waves-light btn orange">Войти</a>
    </form>
  </div>
  );
}

export default Registration;
