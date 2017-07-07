import React, { Component } from "react";
import RSSParser from "rss-parser";
import _ from "lodash";

class PodcastListItem extends Component {
	state = {
		episodes: [],
	};

	componentDidMount() {
		RSSParser.parseURL(this.props.feed, (err, parsed) => {
			if (!err && parsed && parsed.feed) {
				const episodes = [];
				parsed.feed.entries.forEach(entry => {
					episodes.push(entry.title);
				});
				this.setState({ episodes });
			}
		});
	}

	render() {
		return (
			<div display="none">
				{this.state.episodes.map((episode, index) => {
					return (
						<p key={index}>{episode}</p>
					);
				})}
			</div>
		);

		// RSSParser.parseURL(this.props.feed, function(err, parsed) {

		// 	const entryList = parsed.feed.entries;
		// 	for(var i = 0; i < entryList.length; i++){
		// 		console.log(entryList[i])
		// 		return (
		// 			<div>
		// 			{
		// 				<p>{entryList[i].title}</p>
		// 			}
		// 			</div>
		// 		)
		// 	}
		// })
		// if (this.props.feed != undefined){
		// 	const entryLists = RSSParser.parseURL(this.props.feed, (err, parsed) => parsed.feed.entries);
		// 	console.log(entryLists)
		// 	return (
		// 		<div>
		// 			{
		// 				entryLists.map((list) => (
		// 					<p>{list.title}</p>
		// 				))
		// 			}
		// 		</div>
		// 	);
		// }
	}
}
export default PodcastListItem;
