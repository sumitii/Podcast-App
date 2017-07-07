import _ from "lodash";
import React, { Component } from "react";
import PodcastListItem from "./podcast_list_item";

class PodcastList extends Component {

	state = {
		showEpisodes : false,
	}

	onClick(e){
		e.preventDefault();
		this.setState({showEpisodes: !this.state.showEpisodes})
	}

	render() {
		return (
			<ul>
				{this.props.podcasts &&
					this.props.podcasts.map((listItem, index) =>
						<div key={index}>
							<li>
								<img src={listItem["artworkUrl60"]} />
								{listItem["collectionName"]}{" "}
								{listItem["artistName"]}
							</li>
							<a href="#" onClick={this.onClick.bind(this)}>Episode List
								{this.state.showEpisodes && <PodcastListItem feed={listItem["feedUrl"]} /> }
							</a>
						</div>
					)}
			</ul>
		);
	}
}

export default PodcastList;
