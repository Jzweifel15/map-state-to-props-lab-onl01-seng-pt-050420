import React from 'react';
import ReactDOM from 'react-dom';
import createStore from "redux";
import Provider from "react-redux";
import App from './App'

import manageUsers from './reducers/manageUsers'

<<<<<<< HEAD
let store = createStore(manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
=======
const store = createStore(manageUsers);
>>>>>>> 0347e31cba5334a77228c366a19f96d083a8a3d5


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root')
);
