import _ from "lodash";
import React, { Component } from "react";
import PodcastListItem from "./podcast_list_item";

class PodcastList extends Component {

	render() {
		return (
				<ul>
					{this.props.podcasts &&
						this.props.podcasts.map((listItem, index) =>
							<div key={index} className="row">
								<li className="episode-list valign-wrapper col s6">
									<img className="podcast-image" alt="podcast image" src={listItem["artworkUrl60"]} />
									{listItem["collectionName"]}{<br/>}{listItem["artistName"]}
								</li>
								<div className="col s6 podcast-list-item">
									<PodcastListItem  id={listItem["collectionId"]} feed={listItem["feedUrl"]} />
								</div>
							</div>
							
						)}
				</ul>

		);
	}
}

export default PodcastList;
