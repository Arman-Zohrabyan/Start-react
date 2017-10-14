import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Search from '../components/pages/search';
import Append from '../components/pages/add_data';
import Delete from '../components/pages/delete';
import Layout from '../layout';


export default (
	<Route path="/" component={Layout} >
		<IndexRedirect to="search"/>
		<Route path="search" component={Search} />
		<Route path="delete" component={Delete} />
		<Route path="append" component={Append} />
	</Route>
)