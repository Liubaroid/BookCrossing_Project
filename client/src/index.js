import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import App from './components/App/App';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// import './index.css';

ReactDOM.render(
  <>
  <Provider store={store}>
    <App />
  </Provider>
  </>,
  document.getElementById('root')
);
