import _ from "lodash";
import React, { Component } from "react";
import PodcastListItem from "./podcast_list_item";

class PodcastList extends Component {

	state = {
		isHidden: true
	}

	toggleHidden (){
		this.setState({
			isHidden: !this.state.isHidden
		})
	}

	render() {
		return (
			<ul>
				{this.props.podcasts &&
					this.props.podcasts.map((listItem, index) =>
						<div key={index}>
							<li className="episode-list">
								<img src={listItem["artworkUrl60"]} />
								{listItem["collectionName"]}{" "}
								{listItem["artistName"]}
							</li>
								<a href="#" onClick={this.toggleHidden.bind(this)}>Episode list</a>
								{!this.state.isHidden && <PodcastListItem feed={listItem["feedUrl"]} />}
						</div>
					)}
			</ul>
		);
	}
}

export default PodcastList;
