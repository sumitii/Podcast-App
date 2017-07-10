import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ItunesSearch from "itunes-search";
import SearchBar from "./components/search_bar";
import PodcastList from "./components/podcast_list";
import PodcastListItem from "./components/podcast_list_item";
import Materialize from "materialize";

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
    const val = event.target.value;
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.setState({
        input: val
      });
      this.itunesSearch();
    }, 250);
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper indigo darken-1">
            <a href="#" className="brand-logo">
              Podcast Search
            </a>
          </div>
        </nav>
        <div className="container">
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
      </div>
    );
  }
}

export default App;
