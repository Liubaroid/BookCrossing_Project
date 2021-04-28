import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import App from './components/App/App';
import './index.css';
import M from 'materialize-css'; 

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
let elems = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
