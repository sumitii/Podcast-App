import _ from 'lodash';
import React, { Component } from 'react';

class PodcastList extends Component {
	constructor(props){
		super(props);
	}

	render() {
		if (this.props.podcasts != undefined){
			const list = this.props.podcasts;
			const listItems = list.map((listItem) =>
				<li><img src={listItem['artworkUrl60']} />{listItem['collectionName']} {listItem['artistName']}</li>
			) 
				return(
					<ul>{listItems}</ul>
				)
		}
		return null
	}

}

export default PodcastList