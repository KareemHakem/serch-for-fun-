import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImagesLest from "./imagesLest";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: 10 }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImagesLest images={this.state.images} />
        </div>
      </>
    );
  }
}

export default App;
