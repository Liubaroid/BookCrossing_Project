import React from 'react';
import { useRef } from 'react'
function Registration(props) {

const regHandler = async () => {
  
const uname = name.current.value;
const upass = pass.current.value; 

const response = await fetch('http://localhost:8080/users/register', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: uname,
        password: upass,
      }),
    });
}

const name = useRef();
const pass = useRef();

  return (
    <div className="row">
    <form className="col s12">
    <h4>Sign-up</h4>
      <div className="row">
        <div className="input-field col s12">
          <input ref={name} id="last_name" type="text" className="validate"/>
          <label for="last_name">Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input ref={pass} id="password" type="password" className="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
     
      <a onClick={regHandler} class="waves-effect waves-light btn">send</a>
    </form>
  </div>
  );
}

export default Registration;
