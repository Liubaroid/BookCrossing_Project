import React from 'react';

function Registration(props) {

  return (
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <a class="waves-effect waves-light btn">button</a>
    </form>
  </div>
  );
}

export default Registration;
