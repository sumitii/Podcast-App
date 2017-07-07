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
      <div className="magnifying-glass">
        <svg viewBox="0 0 25 25">
          <circle cx="9.87" cy="9.93" r="8.87"></circle>
          <line x1="23.92" y1="23.98" x2="16.2" y2="16.26"></line>
        </svg>
      </div>
    </div>
  )
	}

}

export default SearchBar