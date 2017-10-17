import React, { Component } from 'react';

import Modal from '../modal/showInfo.jsx';


export default class Search extends Component {
	constructor(props) {
        super(props);

		this.state = {
			isLoading: this.props.isLoading,
			CONTACTS: this.props.data,
			displayedContacts: this.props.data,
			modalOpen: false,
			modalCurrentInfoID: 0
		};
		
		this.handleSearch = this.handleSearch.bind(this);
	}
	
	componentWillReceiveProps(props) {
		this.setState({
			CONTACTS: props.data,
			isLoading: props.isLoading,
			displayedContacts: props.data
		});
	}
	
	handleSearch(event) {
		let searchQuery = event.target.value.toLowerCase();
		
		let displayedContacts = this.state.CONTACTS.filter( el => {
			let searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({displayedContacts});
	}
	
	openModal(key) {
		this.setState({modalOpen: true, modalCurrentInfoID: key});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

	sorting(sortType) {
		(sortType === "asort") ? this.state.displayedContacts.sort((a,b) => (
			a.name.toLowerCase() > b.name.toLowerCase() ? 1 : (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0)
		)) : this.state.displayedContacts.sort((a,b) => (
			a.name.toLowerCase() < b.name.toLowerCase() ? 1 : (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 0)
		));
		this.setState({ displayedContacts : this.state.displayedContacts });
	}
	
	render() {
		return (
			<div className="contacts">
			{ this.state.isLoading
				? <div className="search-content-loading"></div>
				:<div> 
				<button className="asort-btn" onClick={this.sorting.bind(this, "asort")}>ASCENDING SORT</button>
				<button className="dsort-btn" onClick={this.sorting.bind(this, "dsort")}>DESCENDING SORT</button>
				<div className="w_50percent margin-auto">
					<input
						type="text"
						placeholder="Search..."
						className="search-field"
						onChange={this.handleSearch}
					/>
				</div>
				
				<div className="contacts-list">
					{
					    this.state.displayedContacts.map( (el, key) => (
							<div key={key} className="contact" onClick={this.openModal.bind(this, key)}>
								<img className="contact-image" alt="img not found" src={el.image} width="60px" height="60px" />
								<div className="contact-info">
									<div className="contact-name"> {el.name} </div>
									<div className="contact-number"> {el.phoneNumber} </div>
								</div>
							</div>
					    ))
					}
				</div>
				{
					this.state.modalOpen ?
					<Modal
						closeModal         = {this.closeModal.bind(this)}
						modalCurrentInfoID = {this.state.modalCurrentInfoID}
						data               = {this.state.displayedContacts}
					/>
					: ''
				}
				</div>
			}
			</div>
		);
	}
}