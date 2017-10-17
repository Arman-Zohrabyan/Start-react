import React, { Component } from 'react'

export default class StaticTopPart extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			max: this.props.max,
			dataCount: 0,
			percent: 0
		}
	}
	
	componentWillReceiveProps(props) {
		this.setState({
			dataCount: props.dataCount.length,
			percent: props.dataCount.length * 100 / this.state.max
		});
	}
	
	render() {
		let { state } = this
		let style = { width: state.percent+"%" }
		return (
			<div id="TopPart">
				<div className="place-for-measure">
					<div className="measure-info-container">
						<span className="measure-info">Peoples {state.dataCount}/{state.max}</span>
						<span className="measure-info">You can add more {state.max-state.dataCount} people</span>
					</div>
					<div className="empty-measure">
						<div className="significative" style={style}></div>
					</div>
				</div>
			</div>
		);
	}
}