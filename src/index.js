import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { createBrowserHistory } from 'history';

import routes from './router/routes.jsx'

useRouterHistory(createBrowserHistory);

function init() {
ReactDOM.render(
	<Router history={browserHistory}>
		{routes}
	</Router>, document.getElementById('root'))
}

init();
