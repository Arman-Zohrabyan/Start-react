import React, { Component } from 'react';

import StaticTopPart from './components/static/percentageInfo.jsx';
import Menu from './components/static/menu.jsx';
import serviceAdd from './services/query.js'


export default class Layout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      maxData: 150,
      isLoading: true
    };
    props.getData();
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