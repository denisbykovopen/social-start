import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'typeface-roboto';

import postReducer from './Reducers/PostReducer';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  postReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
