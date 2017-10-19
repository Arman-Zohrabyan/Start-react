import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Search from '../components/pages/search.jsx';
import Append from '../components/pages/add_data.jsx';
import Delete from '../components/pages/delete.jsx';
import Error from '../components/pages/error.jsx';
import Layout from '../layout.jsx';


export default (
	<div>
		<Route path="/" component={Layout} >
			<IndexRedirect to="search"/>
			<Route path="search" component={Search} />
			<Route path="delete" component={Delete} />
			<Route path="append" component={Append} />
		</Route>
		<Route path="/*" component={Error} />
	</div>
)