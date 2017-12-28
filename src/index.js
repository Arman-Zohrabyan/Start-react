import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { createBrowserHistory } from 'history';

import routes from './router/routes.jsx'
/* Redux */
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import appReducers from './reducers';
let store = createStore(appReducers)


useRouterHistory(createBrowserHistory);

function init() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}

init();
