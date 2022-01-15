import React from "react";
import "./App.css";

const initialState = {
  click: false,
  clickCounter: 0,
};

class App extends React.Component {
  state = {
    click: initialState.click,
    clickCounter: initialState.clickCounter,
  };

  componentDidUpdate(prevState) {
    if (prevState.click !== this.state.click) {
      setTimeout(() => {
        console.log("state clear");
        this.setState({ ...initialState });
      }, 2000);
    }
  }

  clickedBox = (e) => {
    this.setState((state) => ({
      click: true,
      clickCounter: ++state.clickCounter,
    }));
  };

  render() {
    return (
      <div className="App">
        <div
          className={`box 
          ${this.state.click ? "clicked" : "default"}
          ${this.state.clickCounter >= 3 ? "multipleClick" : ""}          
          `}
          onClick={this.clickedBox}
        ></div>
      </div>
    );
  }
}

export default App;
