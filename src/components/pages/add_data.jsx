import React, { Component } from 'react';

import serviceAdd from '../../services/query.js'

export default class Append extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			inputs : [
				{name: 'name'       , value: '', placeholder: 'Name*'},
				{name: 'phoneNumber', value: '', placeholder: 'Phone*'},
				{name: 'image'      , value: '', placeholder: 'Image URL*'}
			]
		}
		
		this.add = this.add.bind(this);
		this.resetValues = this.resetValues.bind(this);
		this.checkValidation = this.checkValidation.bind(this);
	}
	
	resetValues() {
		this.state.inputs.map(v => v.value = '');
		this.setState({
			inputs: this.state.inputs
		});
	}
	
	checkValidation() {
		const { inputs } = this.state;
		let bool;
		let check = inputs.filter( v => {
			switch(v.name) {
				case 'name':
					bool = v.value.length > 5;
					break;
				case 'phoneNumber':
					bool = (v.value.length > 5 && v.value[0] === '+');
					break;
				case 'image':
					bool = (v.value.length > 5 && (v.value.indexOf('.') !== -1));
					break;
				default :
					break;
			}

			return bool;
		});
		return (check.length === 3) ? true : false;
	}

	add (e) {
		e.preventDefault();
		
		let data={};
		
		this.state.inputs.forEach(v => {
			data[v.name] = v.value;
		});
		
		serviceAdd.add(data)
		.then((data) => {
			this.resetValues();
			this.props.refresh();
		});
	}
	
	handleChange(field, e) {
		let symbol = e.target.value;
		let value = this.state.inputs;
		value[field].value = symbol;
		this.setState({
			inputs: value
		});
	}
	
	render() {
		const { inputs } = this.state;
		return (
			<div id="append">
			{
				inputs.map((v, k) => (
					<input
						key={k}
						className="search-field"
						name={v.name}
						placeholder={v.placeholder}
						onChange={this.handleChange.bind(this, k)}
						value={v.value}
					/>
				))
			}
			{
				this.checkValidation()
				? <center><button className="my-btn" onClick={this.add}>ADD</button></center>
				: <center><span className="form-not-valid">Form is not valid</span></center>
			}
			</div>
		);
	}
}