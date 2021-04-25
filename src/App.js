import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube";

class App extends Component {
  onTermSubmit = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div className={"ui container"}>
        <SearchBar onSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;
