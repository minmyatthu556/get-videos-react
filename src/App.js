import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search/", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className={"ui container"}>
        <SearchBar onSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} video
      </div>
    );
  }
}

export default App;
