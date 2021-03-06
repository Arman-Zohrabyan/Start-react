import React, { Component } from 'react';

import './css/style.css';

import StaticTopPart from './components/static/percentageInfo';
import Menu from './components/static/menu';
import serviceAdd from './services/query'


export default class Layout extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			data: [],
			maxData: 150,
			isLoading: true
		};
		
		this.get_data = this.get_data.bind(this);
	}
	
	componentWillMount () {
		this.get_data();
	}
	
	get_data() {
		serviceAdd.get_all()
		.then((data) => this.setState({data, isLoading: false}));
	}
	
	render() {
		return (
			<div id="site-content">
				<Menu currentPath={this.props.location.pathname} />
				<StaticTopPart dataCount={this.state.data} max={this.state.maxData} />
				<div className="content-section">
					{React.cloneElement(this.props.children, { data: this.state.data, refresh: this.get_data })}
				</div>
			</div>
		);
	}
}