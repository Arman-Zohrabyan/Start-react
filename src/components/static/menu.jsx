import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Menu extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			'path' : {
				'/search': 'SEARCH',
				'/append': 'ADD NEW DATA',
				'/delete': 'DELETE DATA'
				}
		};
	}
	
	render() {
		const paths = this.state.path;
		const current_path = this.props.currentPath;
		return (
			<div id="menu">
				<div className="place-for-logo">Arm</div>
				<ul>
					{
						Object.keys(paths).map( (val, key) => (
							<Link key={key} to={val}>
								<li className={(val===current_path) ? "my-btn active-tab" : "my-btn"}>{paths[val]}</li>
							</Link>
						))
					}
				</ul>
			</div>
		);
	}
}