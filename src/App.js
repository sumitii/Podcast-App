import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ItunesSearch from "itunes-search";
import SearchBar from "./components/search_bar";
import PodcastList from "./components/podcast_list";
import PodcastListItem from "./components/podcast_list_item";

var itunes = require("itunes-search");

class App extends Component {
  state = {
    podcasts: [],
    input: ""
  };

  itunesSearch() {
    var options = {
      media: "podcast",
      limit: "5"
    };
    itunes.search(this.state.input, options, response => {
      this.setState({ podcasts: response });
    });
  }

  handleChange(event) {
    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    const val = event.target.value;
    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.setState({
        input: val
      });
      this.itunesSearch();
    }, 500);
  }

  render() {
    return (
      <div>
      <header className="header" role="banner">
        <div className="header-content">
            <SearchBar
                value={this.state.input}
                handleChange={this.handleChange.bind(this)}
              />
        </div>     
      </header>

        <PodcastList podcasts={this.state.podcasts.results} />
      </div>
    );
  }
}

export default App;
