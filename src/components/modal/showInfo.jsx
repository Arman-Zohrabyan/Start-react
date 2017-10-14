import React, { Component } from 'react';

import "../../css/modal.css";

export default class Modal extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			currentId: this.props.modalCurrentInfoID,
			data: this.props.data
		}
	}
	
	changeContent(act) {
		this.setState({ currentId: this.state.currentId + act });
	}
	
  render() {
    const { closeModal } = this.props;
	const modalContent = this.state.data[this.state.currentId];
	
    return (
      <div className="info-modal">
        <div className="info-modal-container">
			<span onClick={closeModal} className="modal-close-btn">&#10006;</span>
			{
				(this.state.currentId === 0) ?
				"" :
				<div className="arrow arrow-left" onClick={this.changeContent.bind(this, -1)}>&#60;</div>
			}
			
			{
				(this.state.currentId === this.state.data.length-1) ?
				"" :
				<div className="arrow arrow-right" onClick={this.changeContent.bind(this, 1)}>&#62;</div>
			}
			
			<img src={modalContent.image} alt="no img" width="300px" height="300px" />
			<hr />
			<h1 className="info-modal-name">{modalContent.name}</h1>
			<hr />
			<h2 className="info-modal-phone">{modalContent.phoneNumber}</h2>
		</div>
      </div>
    )
  }
}