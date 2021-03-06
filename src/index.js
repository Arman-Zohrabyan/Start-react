﻿import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'

import routes from './router/routes.jsx'

import registerServiceWorker from './registerServiceWorker';

function init() {
ReactDOM.render(
	<Router history={browserHistory}>
		{routes}
	</Router>, document.getElementById('root'))
}

init();

registerServiceWorker();
