import _ from 'lodash';
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
	}

	render() {
	return(
    <div className="input-wrapper">
      <input className="input" placeholder="Search for your favorite podcast" onChange={this.props.handleChange} />
    </div>
  )
	}

}

export default SearchBar