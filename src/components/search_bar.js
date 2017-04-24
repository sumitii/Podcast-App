import _ from 'lodash';
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
	}

	render() {
	return <input placeholder="Search for your favorite podcast" onChange={this.props.handleChange} />
	}

}

export default SearchBar