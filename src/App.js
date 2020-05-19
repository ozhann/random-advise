import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    advise: "",
  };

  componentDidMount() {
    console.log("component did mount!");
    this.fetchAdvise();
  }

  // we dont need to use "const" because this is inside a class considere as method
  fetchAdvise = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({
          advice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvise}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
