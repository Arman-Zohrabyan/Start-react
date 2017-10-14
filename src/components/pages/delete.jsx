import React, { Component } from 'react'

import '../../css/style.css';

import serviceAdd from '../../services/query'

export default class Delete extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			CONTACTS: this.props.data,
			showContact: props.data.slice(0,10),
			active: [],
			page: 0
		};
	}
	
	componentWillReceiveProps(props) {
		this.setState({
			CONTACTS: props.data,
			showContact: props.data.slice(10*this.state.page,10*(this.state.page+1))
		});
	}

	changePage(page) {
		let allData = Object.assign([], this.state.CONTACTS);
		this.setState({
			showContact: allData.splice(10*page,10),
			page
		});
	}
	
	checkActive(k) {
		let active = this.state.active;
		let index = active.indexOf(k);
		if(index === -1) {
			this.setState({active: active.concat(k)});
		} else {
			active.splice(index, 1);
			this.setState({active});
		}
	}
	
	dataRemove(arrayKeys) {
		serviceAdd.remove(arrayKeys)
		.then((data) => {
			let page = Math.ceil(data.length/10) - 1;
			this.setState({
				//CONTACTS : data,
				//showContact: data.slice(10*page,10*(page+1)),
				active: [],
				page
			});
			//console.log(this.state.page);
			this.props.refresh();
		});
	}
	
	render() {
		let state = this.state;
		const pageCount = Array(Math.ceil(this.state.CONTACTS.length/10)).fill('');
		return (
			<div id="delete">
				<div className="pagination">
					{
						pageCount.map( (v,k) => (
							<button
								className={k===this.state.page ? "page-btn active-btn" : "page-btn"}
								key={k}
								onClick={this.changePage.bind(this, k)}>
								{k+1}
							</button>
						))
					}
				</div>
				<div className="clear-both">
					{
						state.showContact.map( (v, k) => {
							let addClass = (state.active.indexOf(k+10*state.page) === -1) ? "delete-box" : "delete-box delete";
							
							return (<div className={addClass} key={k} onClick={this.checkActive.bind(this,k+10*state.page)}>
								<img className="contact-image" alt="img not found" src={v.image} width="80px" height="80px" />
								<div className="contact-info">
									<div className="contact-name f-size-28"> {v.name} </div>
									<div className="contact-number f-size-20"> {v.phoneNumber} </div>
								</div>
							</div>);
						})
					}
				</div>
				<center>
					{state.active.length === 0 ?
						<button className="my-btn m_top_20" onClick={this.dataRemove.bind(this, state.active)} disabled>REMOVE</button>
						:
						<button className="my-btn m_top_20" onClick={this.dataRemove.bind(this, state.active)}>REMOVE</button>
					}
				</center>
			</div>
		);
	}
}